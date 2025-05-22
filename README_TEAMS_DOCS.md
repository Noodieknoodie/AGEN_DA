# Microsoft 365 Agents Toolkit Overview

Agents Toolkit (previously known as Teams Toolkit) makes it simple to get started with app development for Microsoft Teams, Outlook, and Microsoft 365 Copilot using Visual Studio Code.

## Key Points

Create new apps from project templates for common app scenarios.
Save setup time with automated app registration and configuration.
Run and debug to Teams, Outlook, and Copilot directly from Visual Studio Code.
Smart defaults for hosting in Azure using infrastructure-as-code and Bicep.
Test with different configurations such as dev, test, and prod using environment features.
## Availability

Agents Toolkit is available as a free extension for Visual Studio Code.  
Available in the Visual Studio Code Marketplace.

### Build With

JavaScript, TypeScript, React, SPFx

Important:  
Agents Toolkit doesn't support building apps for Government Community Cloud (GCC), GCC High, Department of Defense (DoD), and Teams operated by 21Vianet environments.

## Features

### Project Templates

Save time getting started with new Teams apps using capability-focused templates for tabs, bots, message extensions, and common app scenarios.

### Composable Automation Tasks

Automate repetitive or tedious configuration using a composable task framework that creates app IDs, bot registrations, Microsoft Entra apps, and more.

### Multiple Environments

Test your app with different groupings of hosted resources by creating unique configurations such as dev, test, and prod using the Environments features.

### Quick Access to Teams Developer Portal

You can access Teams Developer Portal where you can configure, publish, and manage your app.

### Debug Tunneling for Bots

Run and debug your bot projects using Visual Studio Code and the included Dev Tunnels features.

### Microsoft 365 Agents Playground

Microsoft 365 Agents Playground (previously known as Teams App Test Tool) makes debugging bot-based apps effortless.  
You can chat with your bot and see its messages and Adaptive Cards as they appear in Teams.  
No Microsoft 365 developer account, tunneling, or Teams app and bot registration needed to use Agents Playground.

## See Also

Install Microsoft 365 Agents Toolkit

—-

# Create a New Teams App

Learn how to create a new Microsoft Teams project using Visual Studio Code and the Microsoft 365 Agents Toolkit.

## Starting a New Project

You can build a new Teams project by selecting Create a New Agent/App in Microsoft 365 Agents Toolkit (previously Teams Toolkit).  
Start from built-in Teams app templates or official Teams app samples.  
Agents Toolkit also supports starting with Outlook Add-in templates.

### Types of Teams Apps

#### Scenario-based Teams apps
Templates designed for particular business scenarios, e.g. notification bot, command bot, SSO-enabled tab, Dashboard tab app.

#### Basic Teams apps
Hello world Teams tab, bot, or message extension you can customize.

#### Extend Teams App across Microsoft 365
Apps that can also run on Outlook and Office.com.

## Steps to Create a Basic Teams App

Open Visual Studio Code.
Select Microsoft 365 Agents Toolkit > Create a New Agent/App > select Teams App.
Select "Tab" as the app capability.
Select "Basic Tab" as app capability.
Select JavaScript as the programming language.
Select the default folder for your project root (or select another location via Browse).
Enter a name for your app (alphanumeric only), e.g. "helloworld". Press Enter.
The Teams tab app is created in a few seconds.
## Directory Structure for Teams Apps

After creation, view your project folders/files in the EXPLORER section.

### Basic Teams App Directory

.vscode — VS Code settings for building/debugging your Teams app.
appPackage — App manifest and icon files for Teams app recognition.
env — Stores environment parameters.
infra — Azure Bicep template files for Azure deployment.
src — Source code for Tab capability, UI components, privacy notice, terms of use.
src/app.js — Application entry point, express handlers.
src/views/hello.html — HTML template bound to the tab endpoint.
src/static — Static assets (CSS, JS).
m365agents.yml — Configures Agents Toolkit behavior for provision, deploy, publish.
m365agents.local.yml — Overrides above for local execution and debugging.
Note: Bot or message extension apps add relevant folders.

#### More Details
- For tab apps: "Build your first tab app using JavaScript"
- For bot apps: "Build your first bot app using JavaScript"
- For message extension: "Build your first message extension app using JavaScript"

### Scenario-Based Teams App Directory

Example: Notification bot Teams app

.vscode — VS Code settings.
appPackage — App manifest and icon files.
env — Environment parameters.
infra — Azure Bicep templates.
m365agents.yml — Toolkit lifecycle configuration.
m365agents.local.yml — Local override for debugging.
src/adaptiveCards/ — Adaptive Card templates.
src/internal/ — Generated code for notification functionality.
src/index.ts — Entry point to handle bot messages/notifications.
.gitignore — Exclude local files.
package.json — NPM package file.
Note: Command bot, workflow bot, SSO-enabled tab, or SPFx tab app add relevant folders.

#### More Details
- For notification bot: "Send notification to Teams"
- For command bot: "Build command bot"
- For workflow bot: "Create Teams workflow bot"
- For SPFx tab: "Build a Teams app with SPFx"

## See Also

Microsoft 365 Agents Toolkit Overview
Build a Teams app with Blazor
Build a Teams app with C# or .NET
Prerequisites for all environments and creating your Teams app
Prepare to build apps using Agents Toolkit
# IT Admins - Microsoft Teams Deployment Overview

Options for setting up Teams are tailored for different organization sizes:  
- Small business (fewer than 50 users)  
- Medium/large business (more than 50 users)

## Recommendations

For Teams client installation instructions: Download Microsoft Teams.
Use the Microsoft Teams automated setup guide in the Microsoft 365 admin center for a customized experience.
For best practices, you can also visit the Microsoft 365 setup portal without signing in.
## Deployment Approach

### Start with a Pilot Rollout

For larger organizations: pilot Teams with a small group of early adopters before org-wide deployment.
Use Microsoft Teams Adoption site guidance to help plan full rollout.
Roll out Teams in stages, workload by workload. You can move to the next stage without waiting for full completion of the previous.
### Recommended Rollout Order

Chat, teams, channels, and apps
Meetings, webinars, and town halls
Audio conferencing
Cloud voice
If you're a medium or large organization, use Advisor for Teams to help plan your rollout. Advisor helps create planning tasks, assign owners, share documents, and coordinate your deployment team within Teams itself.

## Additional Resources

### Section: Small business setup
Guides smaller businesses through setting up Teams.  
Small businesses may want core features like chat, channels, meetings, and phone support, but likely don't need multi-office or large-scale rollout planning.

### Section: Enterprise setup
Guides larger businesses through Teams setup where network planning, lifecycle management, and broad adoption are critical.  
Covers audio/video conferencing, Phone System, and PSTN connectivity requirements.

### Section: Deploy Teams clients
Instructions for setting up the new Teams client in your organization.

### Section: Teams training
Provides training materials for end-users and admins managing Teams.

### Section: Upgrade or migrate from Skype for Business Server
If you're migrating from Skype for Business Server or need a hybrid configuration:

#### Organization Profile: Running Skype for Business Server and want to roll out Teams
- First, configure hybrid connectivity between your on-premises environment and Microsoft 365.
- See: Plan hybrid connectivity between Skype for Business Server and Microsoft 365/Office 365.
- Also review: Upgrade to Teams.

#### Organization Profile: No Skype for Business Server, but have on-premises PSTN solution
- Roll out Teams following the main suggestions.
- Then read: Plan Direct Routing for integrating on-premises PSTN with Teams.

—-

# Prepare to Build Apps Using Microsoft 365 Agents Toolkit

Microsoft 365 Agents Toolkit (previously Teams Toolkit) supports multiple build environments for creating apps. It helps integrate Azure Functions and cloud services into your Teams app.

## Build Environments

Agents Toolkit in Visual Studio Code lets you build Teams apps using:

JavaScript or TypeScript
SharePoint Framework (SPFx)
### Using JavaScript or TypeScript

Advantages:
- Rich, user-friendly UI and UX capabilities.
- Quick upgrades to existing apps.
- Distributes apps across platforms (Android, iOS).
- Compatible with existing APIs.
- Supports React.

Supported app types:
- Tab app: Custom tabs with web-based content for Teams.
- Bot app: Chatbots or conversational bots for simple, repetitive tasks (customer service, support, etc.).
- Notification bot: Sends messages in Teams channels/groups/personal chats via HTTP requests.
- Command bot: Automates tasks; responds to simple queries or commands in chats.
- Workflow bot: Interacts with Adaptive Cards enabled by action handler features.
- Message extension: Interacts with your web service via buttons/forms in the Teams client.

### Using SPFx

Agents Toolkit also lets you create tab apps using SPFx.

Advantages:
- Easy integration with SPFx data in Teams.
- Integrates SPFx solutions with business APIs secured by Microsoft Entra ID.
- Access to open-source tools.
- Delivers a great UX with powerful applications.
- Integrates with other Microsoft 365 workloads.
- Flexible hosting options.

## Support for Azure Functions

Agents Toolkit supports integrating Azure Functions into your apps.

Benefits:
- Lets you focus on core logic; Azure Functions handles execution.
- Provides "compute on-demand":
    1. Implements system logic in code blocks ("functions").
    2. Scales resources and function instances automatically as requests increase.
- Integrates with many cloud services for feature-rich implementations.

Common Azure Functions scenarios:
- Building a web API
- Processing database changes
- Processing IoT data streams
- Managing message queues

## Node.js Version Compatibility (By Project Type & Toolkit Version)

5.0.0
Notify with HTTP/timer trigger: 16, 18
Azure functions: 16, 18
SPFx: 16
Non-SPFx: 16, 18
4.2.2
Notify with HTTP/timer trigger: 14, 16, 18 (Preview)
Azure functions: 14, 16, 18 (Preview)
SPFx: 16
Non-SPFx: 14, 16, 18
4.2.0
SPFx: 16
4.0.3
SPFx: 14, 16
4.0.0
Non-SPFx: 14, 16
3.7.0
SPFx: 12, 14
<3.7.0
SPFx: 10, 12, 14
Azure functions: 10, 12, 14
Other: 10, 12, 14, 16
## See Also

Microsoft 365 Agents Toolkit Overview
Developer Portal for Teams
Create a new Teams project
—-

# Environments in Microsoft 365 Agents Toolkit

Microsoft 365 Agents Toolkit (previously Teams Toolkit) lets you run and test your app in different deployment targets, such as dev, staging, production, or locally on your machine.

Agents Toolkit uses environment files to organize and automate the configuration for each deployment target.  
Environment files represent all resources needed for a specific deployment environment.

## Default Environment Groupings

local: For running the app on your machine (cannot be renamed).
dev: For hosting elsewhere (can be renamed or new environments added).
You can add new environments through the Environments window or manually by creating new .env.{environment-name} files.

## How Environment Files Work

Files use the naming convention: .env.{environment-name}
Toolkit lifecycle commands (Provision, Deploy, Publish) require you to specify an environment name matching the filename.
You can define environment variables in your shell, which override values in .env if there’s a conflict.
Environment file location:  
By default, if no environmentFolderPath is set, Agents Toolkit assumes dev and writes outputs to ./env/.env.dev.

## Local Environments

Certain resources (like app registrations and Teams client) are always in the cloud.
Application logic and other components can run locally for development/testing.
All project templates and samples include a local environment, with:
./env/.env.local
./env/.env.local.user
Local environment lets you run your app with a local web server, supports debugging (VS Code/VS).
Use a separate project file: m365agents.local.yml (kept in the same directory as m365agents.yml).
## Creating a New Environment Manually in VS Code

Each project supports:
- One local environment
- Multiple remote environments

After project creation:
- local for your machine
- dev for remote/cloud

To add a new environment:
1. Open your Teams app project in Visual Studio Code.
2. Click the Microsoft 365 Agents Toolkit icon in the activity bar.
3. Select the + icon in the ENVIRONMENT section.
4. Enter a name for the new environment and press Enter.

## Targeting an Environment

With multiple environments (production, dev, local), select the desired environment from the menu.  
Agents Toolkit will prompt you to pick the target environment before running lifecycle commands.

—-

# What is Azure Functions?

Azure Functions is a serverless solution for building robust apps with less code, less infrastructure, and lower costs. The cloud infrastructure automatically provides all resources needed to run your applications, so you don't manage servers.

Focus on your core logic, using your most productive language, while Azure Functions handles the rest.  
(For a full list, see "Supported languages in Azure Functions.")

## Scenarios

Azure Functions uses event-driven triggers and bindings to connect your code to other services without extra glue code.  
Common scenarios:

Process file uploads: Run code when a file is uploaded or changed in blob storage.
Process data in real time: Capture/transform data from event and IoT streams before storage.
Run AI inference: Pull text from a queue, process with AI services for analysis/classification.
Run scheduled tasks: Execute clean-up code or workflows at scheduled intervals.
Build scalable web APIs: Implement REST endpoints with HTTP triggers.
Build serverless workflows: Use Durable Functions to create workflows from multiple functions.
Respond to database changes: Run logic when a document is created or updated.
Create reliable message systems: Process Azure Queue Storage, Service Bus, or Event Hub messages.
These enable event-driven systems and modern architectural patterns. (See "Azure Functions scenarios" for more.)

## Development Lifecycle

Write function code in C#, Java, JavaScript, PowerShell, Python, or use custom handlers for other languages (e.g., Rust, Go).
Develop and debug with tools like Visual Studio, VS Code, Maven, etc.
Deploy directly to Azure.
Integrated monitoring and analysis through Azure Monitor and Application Insights.
## Hosting Options

Consumption plan: Fully serverless, pay only for execution time, auto-scales.
Premium plan: Always-warm instances for fast response, scales automatically.
App Service plan: Dedicated resources—host functions with other web apps for predictable costs and scaling.
Custom containers: Deploy functions in fully customizable containers; host on Functions, Azure Container Apps, or self-host in Kubernetes.
## Related Content

Azure Functions scenarios
Get started with Azure Functions
—-

# Provision Cloud Resources

TeamsFx integrates with Azure and Microsoft 365 cloud, letting you place your app in Azure with a single command. TeamsFx uses Azure Resource Manager (ARM) for provisioning the Azure resources your application needs.

## Provisioning in Visual Studio Code

You can use the provision command in Microsoft 365 Agents Toolkit (or the CLI) to create/update resources for your app.  
Provision steps are defined in m365agents.yml under the provision property.

Note: Azure services incur costs in your subscription. Use the Azure pricing calculator for estimates.

## Provision Actions

### teamsApp/create
- Creates a new Teams app in Developer Portal if app ID is missing.
- Usage:
  - uses: teamsApp/create
    with:
      name: <app-name>
    writeToEnvironmentFile:
      teamsAppId: <env-var-name>

### teamsApp/update
- Updates the app manifest for an existing Teams app.
- Usage:
  - uses: teamsApp/update
    with:
      appPackagePath: <path-to-package-file>

### teamsApp/validateManifest
- Validates the manifest file using its schema.
- Usage:
  - uses: teamsApp/validate
    with:
      manifestPath: <path-to-manifest-file>

### teamsApp/validateAppPackage
- Validates Teams app package using validation rules.
- Usage:
  - uses: teamsApp/validateAppPackage
    with:
      appPackagePath: <path-to-package-file>

### teamsApp/zipAppPackage
- Compresses app manifest and icons into a zip.
- Usage:
  - uses: teamsApp/zipAppPackage
    with:
      manifestPath: <path-to-manifest-file>
      outputZipPath: <zip-file>
      outputJsonPath: <json-file>

### teamsApp/publishAppPackage
- Publishes Teams app zip to tenant app catalog.
- Usage:
  - uses: teamsApp/publishAppPackage
    with:
      appPackagePath: <zip-file>
    writeToEnvironmentFile:
      publishedAppId: <env-var-name>

### aadApp/create
- Creates a new Microsoft Entra (AAD) app if clientId is missing.
- Usage:
  - uses: aadApp/create
    with:
      name: <app-name>
      generateClientSecret: true
      signInAudience: "AzureADMyOrg"
    writeToEnvironmentFile:
      clientId: <env-var>
      clientSecret: <env-var>
      objectId: <env-var>
      tenantId: <env-var>
      authority: <env-var>
      authorityHost: <env-var>

### aadApp/update
- Updates your Microsoft Entra app based on manifest.
- Usage:
  - uses: aadApp/update
    with:
      manifestPath: <manifest-path>
      outputFilePath: <output-file>

### botAadApp/create
- Creates or reuses Microsoft Entra app for a bot.
- Usage:
  - uses: botAadApp/create
    with:
      name: <bot-app-name>
    writeToEnvironmentFile:
      botId: <env-var>
      botPassword: <env-var>

### arm/deploy
- Deploys ARM templates in parallel.
- Usage:
  - uses: arm/deploy
    with:
      subscriptionId: ${{AZURE_SUBSCRIPTION_ID}}
      resourceGroupName: ${{AZURE_RESOURCE_GROUP_NAME}}
      templates:
        - path: <template-path>
          parameters: <parameters-path>
          deploymentName: <deployment-name>
      bicepCliVersion: v0.9.1

### azureStorage/enableStaticWebsite
- Enables static website in Azure Storage.
- Usage:
  - uses: azureStorage/enableStaticWebsite
    with:
      storageResourceId: ${{<storage-resource-id>}}
      indexPage: <index-path>
      errorPage: <error-path>

### azureStaticWebApps/getDeploymentToken
- Retrieves deployment token from Azure Static Web Apps.
- Usage:
  - uses: azureStaticWebApps/getDeploymentToken
    with:
      resourceId: ${{AZURE_STATIC_WEB_APPS_RESOURCE_ID}}
    writeToEnvironmentFile:
      deploymentToken: SECRET_TAB_SWA_DEPLOYMENT_TOKEN

### script
- Executes a user-defined script.
- Usage:
  - uses: script
    with:
      run: <command>
      shell: <shell-name>
      workingDirectory: <dir>
      timeout: <ms>
      redirectTo: <output-file>

## Customizing Provision

Provision steps are in m365agents.yml under provision. Add/remove/update actions as needed.

### Referencing Environment Variables

Use ${{ENV_VARIABLE_NAME}} to reference environment variables in your config files.

Example:
subscriptionId: ${{MY_AZURE_SUBSCRIPTION_ID}}

### Customizing ARM Templates

Provide custom or updated ARM templates to the arm/deploy action. Supports both bicep and JSON formats.

## Customizing Teams Apps

You can use existing Microsoft Entra (AAD) apps by adding their values to your environment files.  
Don’t share the same Entra app in multiple environments.

### For Teams App

Add environment variables to .env.{env} for your Teams app's Entra ID, object ID, tenant ID, authority, etc.
Add the client secret to .env.{env}.user.
### For Bot

Add botId to .env.{env}.
Add botPassword to .env.{env}.user.
## See Also

Deploy Teams app to the cloud
—-

# Add Cloud Resources and API Connection

Microsoft 365 Agents Toolkit (formerly Teams Toolkit) enables you to provision cloud resources for hosting your app and connect to APIs, tailored to your development needs. You can autogenerate config files and integrate cloud services or existing APIs—either built by your org or third parties—for your Teams app.

Note:  
You cannot add Azure cloud resources to SharePoint Framework (SPFx) based tab projects.

## Add Cloud Resources

Using Agents Toolkit (VS Code):
1. Open your Teams app project in Visual Studio Code.
2. Select "Microsoft 365 Agents Toolkit" from the activity bar.
3. Select "View How-to Guides" in the DEVELOPMENT section.
4. From the dropdown, choose the cloud service integration you want. You’ll be redirected to its How-to Guide.

Cloud services you can integrate:
- Azure Functions  
  (How to Integrate Azure Functions with your Teams app)
- Azure SQL Database  
  (How to Integrate Azure SQL Database with your Teams app)
- Azure API Management  
  (How to Integrate Azure API Management with your Teams App and export the API to Power Apps)
- Azure Key Vault  
  (How to Integrate Azure Key Vault with your Teams app)

Using Command Palette:
1. Open your Teams app project in Visual Studio Code.
2. Go to View > Command Palette... (or press Ctrl+Shift+P).
3. Enter "How-to Guides" and select "Microsoft 365 Agents: View How-to Guides".
4. Pick the capability to add and you’ll be redirected to the respective How-to Guide.

Cloud service options are the same as above.

## Add API Connection

Add a connection to an existing API (org-built or third-party):

Open your Teams app project in Visual Studio Code.
Select "Microsoft 365 Agents Toolkit" from the activity bar.
Select "View How-to Guides" in the DEVELOPMENT section.
From the dropdown, select "Connect to an API"—this redirects to the guide on integrating API connections.
## See Also

Microsoft 365 Agents Toolkit Overview
Provision cloud resources
Create a new Teams app
Deploy to the cloud
Publish Teams apps using Microsoft 365 Agents Toolkit
—-
