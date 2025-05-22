# APP: AgendaProjectAIFoundry

This is a custom Microsoft Teams **Tab App** named **AgendaProjectAIFoundry** for your financial planning firm. Its goal: eliminate manual work creating client meeting agendas from PDF performance reports, fully leveraging AI automation via Azure Foundry, OpenAI's GPT-4o, React, and Teams Toolkit.

### Tech Stack & Integration Points:

* **React Frontend**

  * Built using **Vite**.
  * Provides UI for uploading client PDFs, choosing meeting options, and triggering AI-generated agendas.
  * UI modes:

    * **Client Meeting Mode**: PDF upload, structured fields, advisor-specific settings.
    * **General Agenda Mode**: Freeform text inputs, no PDF.

────────────────────────────────────────────────────────────
1. ORG / SUBSCRIPTION INFO
Directory: Hohimer Wealth Management Subscription: Agenda_Teams_Subscription Subscription ID: e2ed8f3b-7c6a-46b9-a829-65aad1898d3e Resource Group: agenda_teams_rgroup Resource Name: agenda-eknud Location: eastus2

────────────────────────────────────────────────────────────

2. CORE ENDPOINTS
Azure AI Foundry Project Endpoint: https://eknud-mayiobab-eastus2.services.ai.azure.com/api/projects/agenda-eknud

Azure OpenAI Endpoint: https://eknud-mayiobab-eastus2.openai.azure.com/

Azure AI Services Endpoint: https://eknud-mayiobab-eastus2.cognitiveservices.azure.com/

Speech to Text Endpoint: https://eastus2.stt.speech.microsoft.com

Text to Speech Endpoint: https://eastus2.tts.speech.microsoft.com

────────────────────────────────────────────────────────────

3. MAIN MODEL DEPLOYMENT
Name: agenda-gpt-4.1 Model: gpt-4.1 (2025-04-14) Endpoint: https://eknud-mayiobab-eastus2.cognitiveservices.azure.com/openai/deployments/agenda-gpt-4.1/chat/completions?api-version=2025-01-01-preview Key: ENTER KEY HERE

Tokens/minute: 50,000 Requests/minute: 50 Lifecycle: GenerallyAvailable until Apr 10, 2026

────────────────────────────────────────────────────────────

4. AGENT INFO
Agent Name: AGENDAAGENT2 Agent ID: asst_ZpZ2Evphmzq1smdI6iDqCiPl Agent Model: agenda-gpt-4.1 Agent Tools: Files

* **Microsoft Teams App**

  * Packaged as a custom Teams Tab App.
  * Integrated using Teams Toolkit via Visual Studio Code.
  * Final AI-generated document provided as a downloadable Word file in Teams, based on a pre-existing template (`Templates/blank_agenda.docx`).

### User Workflow:

* Advisor opens Teams app.
* Uploads client PDF (optional, mode-dependent).
* Selects meeting date, client name, advisor preferences, discussion topics.
* Clicks "Generate."
* AI processes PDF and form data, outputs structured JSON.
* JSON populates Word agenda document, styled appropriately.
* Advisor downloads completed agenda directly in Teams.

---
* No OCR needed—Azure OpenAI agent directly ingests PDFs.
* Azure agent fully provisioned—just needs integration.

