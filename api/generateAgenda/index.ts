import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { BlobServiceClient } from "@azure/storage-blob";
import Busboy from "busboy";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { buildPrompt } from "../shared/promptBuilder.js";
import { generateDocx } from "../shared/documentGenerator.js";

const storage = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING ?? "");
const container = storage.getContainerClient(process.env.AZURE_STORAGE_CONTAINER_NAME ?? "uploaded-pdfs");

const httpTrigger: AzureFunction = async (_: Context, req: HttpRequest) => {
  const { fields, pdfBuffer } = await parseForm(req);
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return { status: 401, body: "Unauthorized" };
  let pdfUrl = "";
  if (pdfBuffer) {
    await container.createIfNotExists();
    const blob = container.getBlockBlobClient(${uuid()}.pdf);
    await blob.uploadData(pdfBuffer);
    pdfUrl = blob.url;
  }
  const prompt = buildPrompt({ ...fields, pdfUrl });
  const aiRes = await axios.post(
    ${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT}/chat/completions?api-version=2025-01-01-preview,
    { messages: [{ role: "user", content: prompt }], temperature: 0.3, max_tokens: 2000 },
    { headers: { "api-key": process.env.AZURE_OPENAI_KEY, "Content-Type": "application/json" } }
  );
  const json = JSON.parse(aiRes.data.choices[0].message.content);
  const docBuffer = await generateDocx(json);
  return {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": attachment; filename="agenda.docx"
    },
    body: docBuffer,
    isRaw: true
  };
};

async function parseForm(req: HttpRequest) {
  return new Promise<{ fields: Record<string, string>; pdfBuffer?: Buffer }>((resolve, reject) => {
    const fields: Record<string, string> = {};
    let pdfBuffer: Buffer | undefined;
    const bb = Busboy({ headers: req.headers });
    bb.on("file", (_name, file, info) => {
      if (info.mimeType === "application/pdf") {
        const chunks: Buffer[] = [];
        file.on("data", d => chunks.push(d));
        file.on("end", () => { pdfBuffer = Buffer.concat(chunks); });
      }
    });
    bb.on("field", (name, val) => { fields[name] = val; });
    bb.on("finish", () => resolve({ fields, pdfBuffer }));
    bb.on("error", reject);
    if (req.body) bb.end(req.body);
  });
}

export default httpTrigger;