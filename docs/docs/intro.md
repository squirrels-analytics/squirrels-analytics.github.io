# Introduction

## What is Squirrels?

Squirrels is a low-code REST API framework designed to simplify and automate data analytics. It eases the burden on data / analytics engineers, eliminates the need for API engineers to create data analytics APIs, and allows data / analytics engineers to play a bigger role in creating backend services for data analytics and tools for AI agent. With a primary focus on reusability and flexibility, Squirrels also allows for query logic to be shared across multiple front-end applications or AI agents. The framework makes it easy to create REST APIs that generate complex SQL queries using authenticated user attributes and selected parameter values, and delivering tabular results that can change behaviour based on the selected values.

For those familiar with [dbt](https://www.getdbt.com/), Squirrels uses a similar data modelling approach. However, the two frameworks are meant for different use cases. A dbt project is only focused on the offline data transformations in a single data warehouse. Squirrels is focused on real-time data analytics while also including features for last-mile offline data transformations that can join data across multiple databases or data warehouses in a single project. The project structure and CLI of Squirrels is intentionally made similar to dbt such that engineers who are already familiar with dbt can pick up Squirrels easily.

## Highlights

- 🚀 **Low-Code REST API Development**: Create data analytics APIs without extensive backend engineering, empowering data engineers to build production-ready services.
- 🔌 **Multi-Database Support**: Connect to multiple databases or data warehouses within a single project and combine data across sources.
- 📊 **Flexible Data Modeling**: Write data models that can reference other data models using Jinja-templated SQL or Python.
- ⚙️ **Interactive Parameters**: Create dynamic datasets and dashboards that respond to user inputs and selections.
- 🔒 **Built-in Security**: Complete user management system with access controls, authentication, and dataset permissions.
- 🤖 **AI-Ready Architecture**: Create dataset APIs that AI agents can interact with to provide insights.
- 💻 **Simple Developer Experience**: Quick setup with CLI commands `pip install squirrels` and `sqrl new`.

## Getting Started

First, check out [Installation](./start/install) and [Creating a new project](./start/new-project) to get started. 

Explore the new Squirrels project to learn by example. The page on [Running the project](./start/run-project) provides details on activating the API server for the project

Finally, see the [Tutorial](./start/tutorial) page to follow a step-by-step guide on creating a new Squirrels project from the ground up. This should help you get a deeper understanding on the main concepts of the Squirrels framework.

## Join the community

Got any questions or feedback? Come join us on our [Discord server](https://discord.gg/AXYn9rxTgP)!
