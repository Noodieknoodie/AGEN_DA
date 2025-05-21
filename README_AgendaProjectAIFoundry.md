# APP: AgendaProjectAIFoundry

This is a custom Microsoft Teams **Tab App** named **AgendaProjectAIFoundry** for your financial planning firm. Its goal: eliminate manual work creating client meeting agendas from PDF performance reports, fully leveraging AI automation via Azure Foundry, OpenAI's GPT-4o, React, and Teams Toolkit.

### Tech Stack & Integration Points:

* **React Frontend**

  * Built using **Vite**.
  * Provides UI for uploading client PDFs, choosing meeting options, and triggering AI-generated agendas.
  * UI modes:

    * **Client Meeting Mode**: PDF upload, structured fields, advisor-specific settings.
    * **General Agenda Mode**: Freeform text inputs, no PDF.

* **Azure OpenAI (GPT-4o) Agent**

  * Deployed in Azure AI Foundry.
  * Extracts data directly from PDFs.
  * Endpoint details:

    * **Project endpoint**:
      `https://agendaprojectaifoundry-resource.services.ai.azure.com/api/projects/agendaprojectaifoundry`
    * **Azure OpenAI endpoint**:
      `https://agendaprojectaifoundry-resource.openai.azure.com/`
    * **Azure AI Services endpoint**:
      `https://agendaprojectaifoundry-resource.cognitiveservices.azure.com/`
    * **Agent endpoint**:
      `https://eknud-mawv9hve-westus3.cognitiveservices.azure.com/`
    * **Target URL for completions**:
      `https://agendaprojectaifoundry-resource.cognitiveservices.azure.com/openai/deployments/gpt-4.1/chat/completions?api-version=2025-01-01-preview`
  * Authentication via API Key.
  * Deployment named `gpt-4.1`, global standard, rate limit: 50,000 tokens/min, 50 requests/min.

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

### Deployment Specifics:

* Azure Subscription: `Agenda_Teams_Subscription` (westus region)
* Subscription ID: `e2ed8f3b-7c6a-46b9-a829-65aad1898d3e`
* No OCR needed—Azure OpenAI agent directly ingests PDFs.
* Azure agent fully provisioned—just needs integration.

This setup leverages Azure-native integrations, Teams Toolkit best practices, and modern React frontend development to ensure a smooth, scalable deployment.
