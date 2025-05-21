AZURE AI FOUNDRY / TEAMS APP / AGENDAGEN CHEATSHEET

────────────────────────────────────────────────────────────
# 1. ORG / SUBSCRIPTION INFO

Directory:               Hohimer Wealth Management
Subscription:            Agenda_Teams_Subscription
Subscription ID:         e2ed8f3b-7c6a-46b9-a829-65aad1898d3e
Resource Group:          agenda_teams_rgroup
Resource Name:           agenda-eknud
Location:                eastus2

────────────────────────────────────────────────────────────
# 2. CORE ENDPOINTS

Azure AI Foundry Project Endpoint:
https://eknud-mayiobab-eastus2.services.ai.azure.com/api/projects/agenda-eknud

Azure OpenAI Endpoint:
https://eknud-mayiobab-eastus2.openai.azure.com/

Azure AI Services Endpoint:
https://eknud-mayiobab-eastus2.cognitiveservices.azure.com/

Speech to Text Endpoint:
https://eastus2.stt.speech.microsoft.com

Text to Speech Endpoint:
https://eastus2.tts.speech.microsoft.com

────────────────────────────────────────────────────────────
# 3. MAIN MODEL DEPLOYMENT

Name:                   agenda-gpt-4.1
Model:                  gpt-4.1 (2025-04-14)
Endpoint:               https://eknud-mayiobab-eastus2.cognitiveservices.azure.com/openai/deployments/agenda-gpt-4.1/chat/completions?api-version=2025-01-01-preview
Key:                    ENTER KEY HERE

Tokens/minute:          50,000
Requests/minute:        50
Lifecycle:              GenerallyAvailable until Apr 10, 2026

────────────────────────────────────────────────────────────
# 4. AGENT INFO

Agent Name:             AGENDAAGENT2
Agent ID:               asst_ZpZ2Evphmzq1smdI6iDqCiPl
Agent Model:            agenda-gpt-4.1
Agent Tools:            Files

────────────────────────────────────────────────────────────
# 5. LIBRARIES / SERVICES

- Azure AI Foundry
- Azure OpenAI
- Azure AI Services
- (for Teams app dev) Teams Toolkit for Visual Studio Code
- React (Vite or CRA, your choice but Vite is standard now)
- @microsoft/teams-js (for Teams client SDK, access Teams context)
- zustand, shadcn/ui (for state mgmt + UI lib, if used in repo)
- axios or fetch for API calls
- Office.js (only if you do Office integration)
- docx or Pizzip + Docxtemplater (Word doc templating)

────────────────────────────────────────────────────────────
# 6. TEAMS UI APP DEV

Dev Environment:
- Visual Studio Code
- Teams Toolkit extension
- Node.js 18+ (recommended)
- Azure CLI (for resource mgmt/deploys)
- GitHub (repo)
- Your Vite React app as the UI codebase

Teams App Registration:
- Use Teams Toolkit to scaffold the app
- Register Azure AD App for authentication if SSO is needed
- If you skip SSO, use a backend Bearer API key model for now (okay for 5 users, not prod-scale best practice)

Core Teams App Endpoints:
- Frontend: /public/index.html or Vite SPA entrypoint
- Backend: Azure Function API (Node/TS or Python ok)
    - Sample: /api/generateAgenda (your main API route for UI <-> agent roundtrip)
- Manifest: /manifest.json

────────────────────────────────────────────────────────────
# 7. SECRETS / KEYS

- Azure OpenAI API Key: ENTER KEY HERE (never check in to code, use .env or Azure App Config)
- (Optional) Teams App Client ID / Secret if you use SSO
- Any Word/Docx template files: store in blob or public assets

────────────────────────────────────────────────────────────
# 8. QUICK CURL/POSTMAN TEST (API)

Sample cURL:
curl -X POST "https://eknud-mayiobab-eastus2.cognitiveservices.azure.com/openai/deployments/agenda-gpt-4.1/chat/completions?api-version=2025-01-01-preview" ^
-H "api-key: ENTER KEY HERE" ^
-H "Content-Type: application/json" ^
-d "{\"messages\": [{\"role\": \"user\", \"content\": \"Test prompt\"}], \"max_tokens\": 128}"

────────────────────────────────────────────────────────────
# 9. TROUBLESHOOTING / MANAGEMENT LINKS

Azure Portal Management Center:
https://portal.azure.com/#@hohimerwealthmanagement.com/resource/subscriptions/e2ed8f3b-7c6a-46b9-a829-65aad1898d3e/resourceGroups/agenda_teams_rgroup/overview

Quota/Usage/Monitoring:
https://eknud-mayiobab-eastus2.openai.azure.com/usage

Teams Toolkit Docs:
https://docs.microsoft.com/en-us/microsoftteams/platform/toolkit/teams-toolkit-fundamentals

────────────────────────────────────────────────────────────
# 10. OTHER RECOMMENDATIONS

- Always use .env.local or Azure App Config for secrets/keys in local dev
- Use Teams Toolkit to run/test local and cloud-hosted apps
- For multi-user auth: research TeamsFx SSO, but Bearer API is fine for <10 staff
- Use provided endpoints for all AI agent calls; don't mix up project/region names
- For docx file output: process on backend then return as base64 to frontend for download
- Avoid direct calls from Teams client to AI endpoint (go via backend Azure Function)
- Use Teams Client SDK for context/identity if needed (org, user, team, etc.)

────────────────────────────────────────────────────────────
# 11. EXAMPLE FILES TO KEEP HANDY

.env.local (never check in!)
REACT_APP_OPENAI_API_KEY=ENTER KEY HERE
REACT_APP_OPENAI_ENDPOINT=https://eknud-mayiobab-eastus2.cognitiveservices.azure.com/openai/deployments/agenda-gpt-4.1/chat/completions?api-version=2025-01-01-preview

manifest.json (Teams App Manifest, configure tab, icon, permissions, etc.)

────────────────────────────────────────────────────────────

# Done
