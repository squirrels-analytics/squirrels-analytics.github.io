---
slug: problems-solved
title: Squirrels - What Problems Does It Solve?
authors: thuang
tags: [squirrels]
---

Squirrels is a REST API framework for data analytics. APIs built with this framework return datasets, dashboards, or parameters for datasets/dashboards. APIs for authentication, data catalog, and testing UI are also included.

## Problems Solved

The following are details on the problems that Squirrels is meant to solve:

<!-- truncate -->

1. Embedded Analytics
    - Today, data professions may feel comfortable creating data analytics dashboards in BI tools like Tableau, Looker, and PowerBI. However, to embed data analytics into your own applications with the same “look and feel” is not possible to do with these popular BI tools
2. Data Analytics Without Vendor Lock-in
    - Working with Squirrels is easy. You just need to install Python, run “pip install squirrels”, run “sqrl init” to create a working project, and run “sqrl run” to activate the API server. From here, you can run the API server in a Docker Container, and host it on your own cloud platform, all for free! 
3. Aligned Skillsets Across Data Analytics Responsibilities
    - Today, dbt has become popular as the go-to tool for offline data transformation pipelines because it lets analytics engineers use YAML, SQL (templated with Jinja), and sometimes Python to produce production-grade data pipelines. It gained popularity largely because of how ubiquitous SQL and Python skills are among data professionals. After creating cleaned/processed tables with dbt, these tables may be queried using tools like Tableau, Looker, PowerBI, Excel, etc. Tableau uses VizQL, Looker uses LookML, PowerBI uses DAX, and Excel uses its own syntax for Excel formulas. This means if an analytics engineer works with dbt and Tableau in one company, and then switched jobs to work with dbt and Looker instead, the engineer would need to learn a new query language for Looker. On the other hand, Squirrels lets you write your dynamic real-time queries with YAML, SQL (templated with Jinja), and sometimes Python, which is similar to dbt! So if that engineer switched into a job that uses dbt and Squirrels, he/she would already be an expert in both!
    - Analogously, NodeJS became popular because it allowed full-stack web developers to use the same language for both frontend and backend. This is similar to how dbt and Squirrels allow data professions to use the same language between offline data pipelines and dynamic real-time queries

## Competition

Classifying other products/companies as “competition” depends on how broad of a use-case is considered. Simply considering products that assist with data analytics, then there are hundreds or thousands. If considering only products that are also API frameworks for data analytics in a git controllable project, [Cube](http://cube.dev) appears to be the only one that is well-known. However, looking at the three problems above, Cube does not solve the third. If considering products that also attempt to solve the three problems above, the following products have recently been introduced to the market, but neither have made a name for themselves yet.

- [Latitude](https://tools.latitude.so/)
- [VulcanSQL](https://vulcansql.com/)

However, there are a few features not available with one or more of these tools, but are available with Squirrels:

- Compatibility with Windows
    - Squirrels and VulcanSQL are compatible with all operating systems including Windows
    - Latitude is not compatible with Windows natively, but can be used on Windows with WSL
- Widget Parameters
    - Squirrels lets you define parameters as single-select, multi-select, date / date range, number / number range, or text parameters. It’s even possible get parameter options from a database or have cascading effects between options
    - Latitude and VulcanSQL allow for arbitrary parameter values passed as query parameters with no specification on parameter typing or parameter options
- Query Multiple Databases in One API Call
    - Squirrels differentiate data models by those that run on the external database (i.e. “database views”) and those that run in the API server (i.e. “federate views”). Federate views can join database views (or other federate views) even if they ran in different databases! Any database / data warehouse with a SQLAlchemy driver can be queried as a source for database views.
    - Latitude allows data models to reference another, but the chain of queries must be on the same database. No concept of “federate views” exist
    - VulcanSQL does not support data models referencing another. There can only be one source per project
- Data Models with Python Pandas
    - If SQL with Jinja is insufficient, data models in Squirrels can be created in Python as a function that return pandas dataframes
    - Latitude and VulcanSQL have no support for Python since both their backend are NodeJS
- Visualization Dashboards
    - Squirrels lets you create APIs that return dashboards as images or html. The dashboards are created in Python with your favourite Python data visualization library such as matplotlib or plotly
    - Latitude lets you create dashboards with Svelte, and uses their own syntax for components. Likely requires a higher learning curve
    - VulcanSQL has no support for dashboards
