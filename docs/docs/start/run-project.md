# Running the project

First, pre-build any static data models that the Squirrels project rely on by running [sqrl build].

```bash
sqrl build
```

This will create the static data models in a "local data lake" using [DuckLake](https://ducklake.select/). We call this the "virtual data lake".

:::tip

If you [install the DuckDB CLI](https://duckdb.org/docs/installation/), you can run [sqrl duckdb] to explore the DuckDB database and run SQL queries in the terminal. For instance, you can run `SHOW TABLES;` to see the tables in the database.

```bash
$ sqrl duckdb
```
```
Running command: duckdb -readonly target\venv.duckdb
v1.2.1 8e52ec4395
Enter ".help" for usage hints.
D SHOW TABLES;
┌────────────────────┐
│        name        │
│      varchar       │
├────────────────────┤
│ build_example      │
│ seed_categories    │
│ seed_subcategories │
│ src_transactions   │
└────────────────────┘
D .exit
```

If you have installed the DuckDB CLI but `sqrl duckdb` still complains that the DuckDB CLI cannot be found, try restarting your terminal or IDE before running the command again.

In addition to the CLI interface, you can run the following to explore the virtual data lake in a web browser:

```bash
sqrl duckdb --ui
```

The UI allows you to run queries in notebooks. Be sure to select "vdl" as the attached database to access tables in the virtual data lake.

:::

Next, open the [.env] file and set the `SQRL_SECRET__ADMIN_PASSWORD` environment variable to something of your choice. We will use this password to log in as the admin user later.

Then, activate the API server by running [sqrl run].

```bash
sqrl run
```

This should print something like the following in the terminal:

```
Welcome to the Squirrels Data Application!

- Application UI (aka Squirrels Studio): http://127.0.0.1:4465/project/sample-expenses/v1/studio
- API Docs (with ReDoc): http://127.0.0.1:4465/api/squirrels/v0/project/sample-expenses/v1/redoc
- API Docs (with Swagger UI): http://127.0.0.1:4465/api/squirrels/v0/project/sample-expenses/v1/docs
- MCP Server URL: http://127.0.0.1:4465/api/squirrels/v0/project/sample-expenses/v1/mcp

INFO:     Started server process [36480]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:4465 (Press CTRL+C to quit)
```

Open either of the "API Docs" links to navigate the APIs that are generated automatically for your Squirrels project. The API docs with Swagger allows you to test the APIs directly in the browser.

Open the "Application UI" link to access [Squirrels Studio] and interact with it in various ways such as exploring available datasets / dashboards, querying data models, and exploring data lineage.

You must log in as an admin user to query data models and explore data lineage. Use the username "admin" and the admin password you set earlier to log in. To see the data lineage for example, change the "Explore" dropdown to "Data Lineage".

![Squirrels Studio Lineage](/img/squirrels-studio-lineage.png)

Play around with [Squirrels Studio] to find other ways you can interact with your Squirrels project. For instance, you can add new users to your Squirrels project by clicking "Menu" > "Manage Users".

You can also logout and click "Explore as Guest" to interact with your Squirrels project as a guest user. You may notice that the datasets, parameters, and explorers you have access to are now different.

:::tip

You can also build and run the API server in one command by running `sqrl run --build`.

Avoid doing builds unnecessarily if there are no changes to the data models.

:::


[sqrl new]: ../../references/cli/new
[sqrl build]: ../../references/cli/build
[sqrl duckdb]: ../../references/cli/duckdb
[sqrl run]: ../../references/cli/run
[.env]: ../concepts/environment
[Squirrels Studio]: ../concepts/studio
