"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[8130],{77735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"1brc-postgres","metadata":{"permalink":"/blog/1brc-postgres","source":"@site/blog/2024-12-09-1brc-postgres.md","title":"Query 1B Rows in PostgreSQL >25x Faster with Squirrels!","description":"The One Billion Row Challenge has been making waves in the data engineering community lately. Originally created to test CSV parsing performance, the challenge involves processing a file containing 1 billion weather measurements to calculate basic temperature statistics for each city. In this post, I\'ll tackle a variation of this challenge using PostgreSQL and demonstrate how to achieve dramatic performance improvements using Squirrels.","date":"2024-12-09T00:00:00.000Z","tags":[{"inline":true,"label":"squirrels","permalink":"/blog/tags/squirrels"},{"inline":true,"label":"postgresql","permalink":"/blog/tags/postgresql"},{"inline":true,"label":"duckdb","permalink":"/blog/tags/duckdb"},{"inline":true,"label":"performance","permalink":"/blog/tags/performance"}],"readingTime":4.7,"hasTruncateMarker":true,"authors":[{"name":"Tim Huang","title":"Co-Founder of Squirrels Analytics","url":"https://github.com/ty2huang","imageURL":"https://github.com/ty2huang.png","key":"thuang","page":null}],"frontMatter":{"slug":"1brc-postgres","title":"Query 1B Rows in PostgreSQL >25x Faster with Squirrels!","authors":"thuang","tags":["squirrels","postgresql","duckdb","performance"]},"unlisted":false,"nextItem":{"title":"Squirrels - What Problems Does It Solve?","permalink":"/blog/problems-solved"}},"content":"The [One Billion Row Challenge](https://www.morling.dev/blog/one-billion-row-challenge/) has been making waves in the data engineering community lately. Originally created to test CSV parsing performance, the challenge involves processing a file containing 1 billion weather measurements to calculate basic temperature statistics for each city. In this post, I\'ll tackle a variation of this challenge using PostgreSQL and demonstrate how to achieve dramatic performance improvements using Squirrels.\\n\\n## The Challenge\\n\\nThe original [One Billion Row Challenge](https://www.morling.dev/blog/one-billion-row-challenge/) focuses on raw CSV processing performance. For our variation, we\'ll:\\n\\n1. Load 1 billion rows into PostgreSQL with additional columns\\n2. Query for city-level temperature statistics\\n3. Create a Squirrels project to serve these analytics via REST API\\n4. Demonstrate significant query performance improvements\\n5. Show how to handle incremental data updates\\n\\n\x3c!-- truncate --\x3e\\n\\n## Setting Up the Environment\\n\\nI provisioned the following AWS resources in the same region/AZ:\\n- An RDS PostgreSQL database (db.r6g.large: 2 vCPUs, 16GB RAM)\\n- An EC2 instance (r8g.large: 2 vCPUs, 16GB RAM)\\n\\n## Data Generation and Loading\\n\\nI generated a 24GB CSV file containing 1 billion weather measurements using a modified version of the createMeasurements.py script from [this github repo](https://github.com/ifnesi/1brc). The first few lines of the file look like this:\\n\\n```\\nBissau;2012-02-20;14.3\\nAlmaty;2019-10-24;-5.3\\nAnkara;2012-10-27;-6.7\\nHouston;2010-06-08;10.6\\nMakassar;2012-04-29;36.0\\n```\\n\\nThe data was loaded into a simple PostgreSQL table with the following DDL:\\n\\n```sql\\nCREATE TABLE weather_data (\\n    id SERIAL PRIMARY KEY,\\n    city VARCHAR(100),\\n    recorded_date DATE,\\n    temperature FLOAT\\n);\\n```\\n\\nThis created a 73GB PostgreSQL table with 4 columns and 1 billion rows.\\n\\n## Initial Query Performance\\n\\nOur baseline query to calculate city-level statistics:\\n\\n```sql\\nSELECT city, MIN(temperature), MAX(temperature), AVG(temperature) \\nFROM weather_data \\nGROUP BY city\\nORDER BY city;\\n```\\n\\nThis query took approximately 7 minutes to complete against the PostgreSQL table.\\n\\n## Enter Squirrels\\n\\nI created a Squirrels project to serve these analytics via a REST API. The project structure looks like this:\\n\\n```\\nsqrl-1brc-postgres/\\n\u251c\u2500\u2500 models/\\n\u2502   \u251c\u2500\u2500 dbviews/\\n\u2502   \u2502   \u251c\u2500\u2500 aggregate_weather.sql\\n\u2502   \u2502   \u2514\u2500\u2500 aggregate_weather.yml\\n\u2502   \u2514\u2500\u2500 sources.yml\\n\u251c\u2500\u2500 .gitignore\\n\u251c\u2500\u2500 env.yml\\n\u251c\u2500\u2500 requirements.txt\\n\u2514\u2500\u2500 squirrels.yml\\n```\\n\\nThe query (found in `models/dbviews/aggregate_weather.sql`) was slightly modified to use Squirrels\' source macro:\\n\\n```sql\\nSELECT city, MIN(temperature), MAX(temperature), AVG(temperature) \\nFROM {{ source(\\"src_weather_data\\") }}\\nGROUP BY city\\nORDER BY city;\\n```\\n\\nThe `models/sources.yml` file is used to tell Squirrels details about the source named \\"src_weather_data\\" including metadata about the table and columns.\\n\\nThe full Squirrels project can be found on GitHub [here](https://github.com/squirrels-analytics/squirrels-examples/tree/main/sqrl-1brc-postgres). This includes all files except for the env.yml file which looks something like this:\\n\\n```\\nenv_vars:\\n  postgres_uri: postgresql://postgres:********@postgres-db.************.us-east-1.rds.amazonaws.com:5432/postgres\\n```\\n\\nThe project dependencies were installed using `pip install -r requirements.txt`. This also installs the `sqrl` CLI tool for commands such as running the API server and building the data artifact.\\n\\nAfter running `sqrl run --host 0.0.0.0 --no-cache` to start the API server, the REST API can be accessed with GET method at the endpoint:\\n- /squirrels-v0/1brc-postgres/v1/dataset/aggregate-weather\\n\\nFirst, I ran the API request without building the data artifact to get the baseline query performance. Then, I ran `sqrl build --stage` to build the necessary data artifact to improve query performance, and ran the API request again. The data artifact is stored in the `target/` folder and is about 5GB in size.\\n\\n## Performance Results\\n\\nThe following are the performance results:\\n\\n1. Initial API Request: 419.51 seconds (\u22487 minutes)\\n2. Running `sqrl build --stage`: 434.19 seconds\\n3. API request after running the build: **15.93 seconds**\\n\\n**We successfully reduced the query runtime from 7 minutes to 15.93 seconds, a 26x performance improvement!**\\n\\n## Handling Data Updates\\n\\nSquirrels makes it easy to handle incremental updates through update hints in `sources.yml` (notice the `update_hints` section below):\\n\\n```yaml\\nsources:\\n  - name: src_weather_data\\n    description: A table containing weather data\\n    table: weather_data\\n    update_hints:\\n      increasing_column: id\\n    columns: ...\\n```\\n\\nTo test this, I:\\n1. Added 1 million new rows to the PostgreSQL table\\n2. Ran `sqrl build --stage` (took 41.84 seconds) and confirmed that the data artifact was updated\\n3. Tested query performance (took **15.66 seconds** for 1.001 billion rows, similar to the 15.93 seconds for 1 billion rows)\\n\\nThe `--stage` flag ensures zero downtime during updates by staging the development copy before swapping the data artifact once it\'s not in use by any ongoing queries. In addition, the `sqrl build` command can be run in the background at some time interval (e.g. every 10 minutes or every hour depending on data freshness requirements) to keep the data artifact up to date.\\n\\n## Behind the Scenes of the \\"Data Artifact\\"\\n\\nThe \\"data artifact\\" is actually a [DuckDB](https://duckdb.org/) database file. The `sqrl build` command is able to build the source table(s) as DuckDB table(s) if the source table are from PostgreSQL, MySQL, or SQLite. When running an API request, Squirrels will determine whether all the necessary source tables exist in the DuckDB database for PostgreSQL, MySQL, or SQLite queries. If they do, it will translate the SQL query into DuckDB\'s SQL dialect (using [SQLGlot](https://sqlglot.com/sqlglot.html)) and run the query on the DuckDB file instead. Support for loading from additional sources (e.g. APIs, S3, etc.) with `sqrl build` will be made available in the future.\\n\\n## Conclusion\\n\\nUsing Squirrels together with DuckDB, we achieved:\\n- **26x faster query performance** on 1 billion rows without changing the PostgreSQL query\\n- Simple incremental updates with zero-downtime refreshes\\n\\nWhile it is possible to optimize the PostgreSQL table for better performance, it often requires significant time and effort with only modest gains. In contrast, using Squirrels can achieve substantial performance improvements with minimal effort.\\n\\nIn Part 2, we\'ll explore dynamic parameterized queries that change based on user input for date ranges, and demonstrate how to join results from multiple databases and unstructured data from S3 in a single API request!"},{"id":"problems-solved","metadata":{"permalink":"/blog/problems-solved","source":"@site/blog/2024-09-07-problems-solved.md","title":"Squirrels - What Problems Does It Solve?","description":"Squirrels is a REST API framework for data analytics. APIs built with this framework return datasets, dashboards, or parameters for datasets/dashboards. APIs for authentication, data catalog, and testing UI are also included.","date":"2024-09-07T00:00:00.000Z","tags":[{"inline":true,"label":"squirrels","permalink":"/blog/tags/squirrels"}],"readingTime":4.09,"hasTruncateMarker":true,"authors":[{"name":"Tim Huang","title":"Co-Founder of Squirrels Analytics","url":"https://github.com/ty2huang","imageURL":"https://github.com/ty2huang.png","key":"thuang","page":null}],"frontMatter":{"slug":"problems-solved","title":"Squirrels - What Problems Does It Solve?","authors":"thuang","tags":["squirrels"]},"unlisted":false,"prevItem":{"title":"Query 1B Rows in PostgreSQL >25x Faster with Squirrels!","permalink":"/blog/1brc-postgres"},"nextItem":{"title":"Welcome to Squirrels","permalink":"/blog/welcome"}},"content":"Squirrels is a REST API framework for data analytics. APIs built with this framework return datasets, dashboards, or parameters for datasets/dashboards. APIs for authentication, data catalog, and testing UI are also included.\\n\\n## Problems Solved\\n\\nThe following are details on the problems that Squirrels is meant to solve:\\n\\n\x3c!-- truncate --\x3e\\n\\n1. Embedded Analytics\\n    - Today, data professions may feel comfortable creating data analytics dashboards in BI tools like Tableau, Looker, and PowerBI. However, to embed data analytics into your own applications with the same \u201clook and feel\u201d is not possible to do with these popular BI tools\\n2. Data Analytics Without Vendor Lock-in\\n    - Working with Squirrels is easy. You just need to install Python, run \u201cpip install squirrels\u201d, run \u201csqrl init\u201d to create a working project, and run \u201csqrl run\u201d to activate the API server. From here, you can run the API server in a Docker Container, and host it on your own cloud platform, all for free! \\n3. Aligned Skillsets Across Data Analytics Responsibilities\\n    - Today, dbt has become popular as the go-to tool for offline data transformation pipelines because it lets analytics engineers use YAML, SQL (templated with Jinja), and sometimes Python to produce production-grade data pipelines. It gained popularity largely because of how ubiquitous SQL and Python skills are among data professionals. After creating cleaned/processed tables with dbt, these tables may be queried using tools like Tableau, Looker, PowerBI, Excel, etc. Tableau uses VizQL, Looker uses LookML, PowerBI uses DAX, and Excel uses its own syntax for Excel formulas. This means if an analytics engineer works with dbt and Tableau in one company, and then switched jobs to work with dbt and Looker instead, the engineer would need to learn a new query language for Looker. On the other hand, Squirrels lets you write your dynamic real-time queries with YAML, SQL (templated with Jinja), and sometimes Python, which is similar to dbt! So if that engineer switched into a job that uses dbt and Squirrels, he/she would already be an expert in both!\\n    - Analogously, NodeJS became popular because it allowed full-stack web developers to use the same language for both frontend and backend. This is similar to how dbt and Squirrels allow data professions to use the same language between offline data pipelines and dynamic real-time queries\\n\\n## Competition\\n\\nClassifying other products/companies as \u201ccompetition\u201d depends on how broad of a use-case is considered. Simply considering products that assist with data analytics, then there are hundreds or thousands. If considering only products that are also API frameworks for data analytics in a git controllable project, [Cube](http://cube.dev) appears to be the only one that is well-known. However, looking at the three problems above, Cube does not solve the third. If considering products that also attempt to solve the three problems above, the following products have recently been introduced to the market, but neither have made a name for themselves yet.\\n\\n- [Latitude](https://tools.latitude.so/)\\n- [VulcanSQL](https://vulcansql.com/)\\n\\nHowever, there are a few features not available with one or more of these tools, but are available with Squirrels:\\n\\n- Compatibility with Windows\\n    - Squirrels and VulcanSQL are compatible with all operating systems including Windows\\n    - Latitude is not compatible with Windows natively, but can be used on Windows with WSL\\n- Widget Parameters\\n    - Squirrels lets you define parameters as single-select, multi-select, date / date range, number / number range, or text parameters. It\u2019s even possible get parameter options from a database or have cascading effects between options\\n    - Latitude and VulcanSQL allow for arbitrary parameter values passed as query parameters with no specification on parameter typing or parameter options\\n- Query Multiple Databases in One API Call\\n    - Squirrels differentiate data models by those that run on the external database (i.e. \u201cdatabase views\u201d) and those that run in the API server (i.e. \u201cfederate views\u201d). Federate views can join database views (or other federate views) even if they ran in different databases! Any database / data warehouse with a SQLAlchemy driver can be queried as a source for database views.\\n    - Latitude allows data models to reference another, but the chain of queries must be on the same database. No concept of \u201cfederate views\u201d exist\\n    - VulcanSQL does not support data models referencing another. There can only be one source per project\\n- Data Models with Python Pandas\\n    - If SQL with Jinja is insufficient, data models in Squirrels can be created in Python as a function that return pandas dataframes\\n    - Latitude and VulcanSQL have no support for Python since both their backend are NodeJS\\n- Visualization Dashboards\\n    - Squirrels lets you create APIs that return dashboards as images or html. The dashboards are created in Python with your favourite Python data visualization library such as matplotlib or plotly\\n    - Latitude lets you create dashboards with Svelte, and uses their own syntax for components. Likely requires a higher learning curve\\n    - VulcanSQL has no support for dashboards"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2024-06-22-welcome.md","title":"Welcome to Squirrels","description":"Welcome to the official documentation website for Squirrels, an open-source project framework for building parameterizable REST APIs for dynamic data analytics! This is an easy-to-use framework for anyone who is familiar with SQL and YAML.","date":"2024-06-22T00:00:00.000Z","tags":[{"inline":true,"label":"welcome","permalink":"/blog/tags/welcome"},{"inline":true,"label":"squirrels","permalink":"/blog/tags/squirrels"}],"readingTime":1.805,"hasTruncateMarker":true,"authors":[{"name":"Tim Huang","title":"Co-Founder of Squirrels Analytics","url":"https://github.com/ty2huang","imageURL":"https://github.com/ty2huang.png","key":"thuang","page":null}],"frontMatter":{"slug":"welcome","title":"Welcome to Squirrels","authors":"thuang","tags":["welcome","squirrels"]},"unlisted":false,"prevItem":{"title":"Squirrels - What Problems Does It Solve?","permalink":"/blog/problems-solved"}},"content":"Welcome to the official documentation website for **Squirrels**, an open-source project framework for building parameterizable REST APIs for dynamic data analytics! This is an easy-to-use framework for anyone who is familiar with SQL and YAML.\\n\\n\x3c!-- truncate --\x3e\\n\\nIn today\'s web development world, REST APIs are known to be the \\"backbone of the internet\\". It allows two software applications across the world to communicate with each other and share data.\\n\\nIn today\'s data analytics world, requirements for data analytics and business intelligence are growing in most companies. But it often comes down to a few technical data experts to answer the growing number of data questions. For instance, suppose that today, a company executive asks for revenue by location for last year, and then tomorrow, asks for revenue by day of week for the last quarter only. For many organizations, these executives must rely on others to produce the required analytics rather than being able to retrieve the information themselves (for instance, by clicking a button in a graphical user interface). This often requires a lot of tedious work for the technical data experts to revise queries on a regular basis, even when several of these data queries take a similar shape but parameterized in different ways.\\n\\nThis is where Squirrels comes into play. It merges the two worlds of \\"REST APIs\\" and \\"data analytics\\" together! By creating dynamic datasets with a **low-code** framework and exposing them as REST APIs that accept query parameters and return a standard JSON structure, you allow others to self-serve the data analytics while having tight control over what they are allowed to query. And it\'s not just for internal analytics only, it can also be embedded in your customer-facing applications to expose analytics for external users!\\n\\n## Why is it named \\"Squirrels\\"?\\n\\nFirst off, it seems to be the trend that many data-relevant tools are named after animals (Pandas, Koalas, Polars, DuckDB, etc.). Not to mention, Squirrels runs on Python, a programming language named after an animal as well.\\n\\nBut more importantly, the phonetics of the word \\"squirrels\\" sounds like a blend between SQL and URLs, which encapsulates the purpose of this framework very well."}]}}')}}]);