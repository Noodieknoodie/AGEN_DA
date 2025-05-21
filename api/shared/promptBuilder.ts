import { advisors as advisorList } from "../../tabs/src/lib/advisors.js";

export function buildPrompt(fields: Record<string, unknown>): string {
  const lines: string[] = [];
  const add = (label: string, value?: string) => { if (value) lines.push(${label}: ${value}); };
  if (fields.mode === "client") {
    add("Client Name", fields.clientName as string);
    add("Meeting Date", fields.meetingDate as string);
    const adv = advisorList.find(a => a.id === fields.advisorId);
    add("Advisor", adv?.name);
    add("Advisor Preferences", adv?.preferences);
  } else {
    add("Meeting Title", fields.meetingTitle as string);
    add("Meeting Date", fields.meetingDate as string);
    add("Participants", fields.participants as string);
    add("Meeting Objective", fields.meetingObjective as string);
  }
  if (fields.customInstructions) add("Custom Instructions", fields.customInstructions as string);
  if (fields.talkingPoints && (fields.talkingPoints as any[]).length) {
    lines.push("Agenda Items:");
    (fields.talkingPoints as any[]).forEach(tp => lines.push(- ${tp.title}${tp.notes ?  (${tp.notes}) : ""}));
  }
  if (fields.pdfUrl) add("PDF Document", fields.pdfUrl as string);
  lines.push("See attached document.");
  return lines.join("\n");
}