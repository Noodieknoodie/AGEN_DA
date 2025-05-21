1  Prep
 • Install VS Code, Teams Toolkit v5, Node ≥ 16 LTS, Azure Functions Core Tools v4.
 • Ensure an Azure subscription and a Blob Storage account exist.

2  Clone & install

git clone <your-repo> agenda-generator
cd agenda-generator
npm i          # installs root + workspaces

3  Local secrets

cp teamsapp/.env.template teamsapp/.env.local
cp api/local.settings.json api/local.settings.dev.json

Open both files, paste:
AZURE_OPENAI_ENDPOINT → https://agendaprojectaifoundry-resource.openai.azure.com
AZURE_OPENAI_KEY   →
AZURE_OPENAI_DEPLOYMENT → gpt-4.1
AZURE_STORAGE_CONNECTION_STRING →
Save.

4  Word template
Drop your styled blank_agenda.docx into templates/ (replace the stub).

5  Teams icons
Replace teamsapp/color.png 192×192 and teamsapp/outline.png 32×32.

6  Local run

# new terminal 1 – frontend
npm run dev -w tabs
# new terminal 2 – API
func start --script-root api

Navigate to https://localhost:8080. Toolkit’s ngrok tunnel opens when you hit F5 later.

7  End-to-end test
Upload a PDF, fill the form, click Generate → browser downloads agenda.docx. Open it—logo, headings, tab stops, values present.

8  Provision Azure
Teams Toolkit panel → Provision → pick subscription → accept defaults.
Resources created: Function App, Storage, App Service plan.

9  Deploy
Teams Toolkit panel → Deploy. Toolkit builds tabs → uploads static site to Azure Storage; builds api → zips + publishes to Function App.

10  Set prod settings
Azure Portal → Function App → Configuration → add the same four env vars from step 3. Hit Save, restart the function.

11  Publish to Teams
Teams Toolkit → Publish → it packs teamsapp/manifest.json with the live endpoint URLs and uploads the custom app to your tenant. Click Add in the dialog.

12  Advisor rollout
Advisors open the new “Agenda Generator” tab in a personal scope. They stay signed-in through Entra ID SSO; no extra login. Upload PDF → Generate → Word agenda downloads inside Teams.

13  Production hardening
 • Flip Function auth to EasyAuth + Managed Identity (Azure AD) when compliance requires.
 • Switch authLevel to anonymous → function already done; Teams token arrives in Authorization header, validate with @azure/msal-node if needed.
 • Large PDFs > 4 MB: adjust WEBSITE_RUN_FROM_PACKAGE=1 memory or stream to Blob then feed SAS URL to GPT-4.
 • Monitor usage in Azure OpenAI “Metrics” blade; 50 RPM / 50 kTPM limits are plenty for five users.

14  Done – ship it.