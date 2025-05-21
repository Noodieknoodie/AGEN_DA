import { readFileSync } from "fs";
import { join } from "path";
import { createReport } from "docx-templates";

const templatePath = join(__dirname, "../../templates/blank_agenda.docx");
const template = readFileSync(templatePath);

export async function generateDocx(data: any): Promise<Buffer> {
  return await createReport({ template, data, cmdDelimiter: ["{", "}"] });
}