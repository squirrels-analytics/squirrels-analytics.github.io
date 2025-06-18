# Answer Data Questions with AI and Squirrels MCP

The **Model Context Protocol (MCP)** is an open standard that enables AI chatbots to securely access external data sources and tools.

Starting with Squirrels version 0.5.0, every project automatically includes an MCP server using the "streamable http" transport. This means you can connect AI chatbots directly to your Squirrels projects (given that the chatbot supports MCP) without any additional code.

## MCP Server URL Structure

The MCP server endpoint follows a predictable URL pattern:

```
http://<host>:<port>/api/squirrels-v0/project/<project_name>/<project_version>/mcp/
```

### Local Development Example

If you have a Squirrels project named `sample` with version `v1` running locally on port 4465:

```
http://localhost:4465/api/squirrels-v0/project/sample/v1/mcp/
```

### Public Example

For testing purposes, you can use our publicly available sample project for mortgage analysis:

```
http://mortgage-squirrels-example.duckdns.org/api/squirrels-v0/project/mortgage/v1/mcp/
```

This sample project demonstrates various Squirrels features and can be used to explore MCP integration without setting up your own project.

## Integrating with MCP Clients

Prerequisites:
- Node.js (>= v18): Install from [nodejs.org](https://nodejs.org)

### Claude Desktop

To add a Squirrels MCP server to Claude Desktop, follow these steps in Claude Desktop:

1. Go to the "Settings" > "Developer" > "Edit Config". This should open your file explorer to the location of the "claude_desktop_config.json" file.
2. Add your Squirrels MCP server to the "claude_desktop_config.json" file. The following is an example:

```json
{
  "mcpServers": {
    "Squirrels Mortgage Example": {
      "command": "npx",
      "args": [
        "-y", "mcp-remote", "https://mortgage-squirrels-example.duckdns.org/api/squirrels-v0/project/mortgage/v1/mcp/"
      ]
    }
  }
}
```

3. After updating the configuration, restart Claude Desktop for the changes to take effect. To restart properly, go to "File" > "Exit" before opening it again. Simply closing the window may not work since Claude Desktop would still be running in the background.

### Cursor

To add a Squirrels MCP server to Cursor, follow these steps in Cursor:

1. Open Cursor Settings (File > Preferences > Cursor Settings)
2. Navigate to "Tools & Integrations" and click "Add Custom MCP"
3. Click "Edit Config" to add your Squirrels server configuration. The following is an example:

```json
{
  "mcpServers": {
    "Squirrels Mortgage Example": {
      "command": "npx",
      "args": [
        "-y", "mcp-remote", "https://mortgage-squirrels-example.duckdns.org/api/squirrels-v0/project/mortgage/v1/mcp/"
      ]
    }
  }
}
```

## Using MCP with Squirrels

Once configured, AI agents can:

- **Discover datasets**: Understand available datasets and their parameters
- **Explore parameter relationships**: Understand how parameters options are related to each other
- **Query datasets**: Access and analyze datasets with specific parameter selections

The AI agent will automatically discover the available tools and resources from your Squirrels project through the MCP interface.
