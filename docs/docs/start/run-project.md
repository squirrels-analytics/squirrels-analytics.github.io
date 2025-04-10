# Running the project

First, pre-build any static data models that the Squirrels project rely on by running [sqrl build].

```bash
sqrl build
```

This will create the static data models in a [DuckDB](https://duckdb.org/) database.

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

You can also run `sqrl duckdb --ui` to explore the database in a web browser.

:::

Next, activate the API server by running [sqrl run].

```bash
sqrl run
```

This should print something like the following in the terminal:

```
Welcome to the Squirrels Data Application!

- Application UI: https://squirrels-analytics.github.io/squirrels-studio/#/login?host=http%3A%2F%2F127.0.0.1%3A4465&projectName=sample&projectVersion=v1
- API Docs (with ReDoc): http://127.0.0.1:4465/api/squirrels-v0/project/sample/v1/redoc
- API Docs (with Swagger UI): http://127.0.0.1:4465/api/squirrels-v0/project/sample/v1/docs

INFO:     Started server process [36480]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:4465 (Press CTRL+C to quit)
```

Open either of the "API Docs" links to navigate the APIs that are generated automatically for your Squirrels project. The API docs with Swagger allows you to test the APIs directly in the browser.

Open the "Application UI" link to access Squirrels Studio, a web application that can be connected to any Squirrels server (including ones running on localhost) and interact with it in various ways such as exploring available datasets / dashboards, querying data models, and exploring data lineage.

You must log in as an admin user to query data models and explore data lineage. Use the username "admin" and the password specified in the .env file (find environment variable "SQRL_SECRET__ADMIN_PASSWORD") to log in with the admin user that comes with your project by default.

![Squirrels Studio Lineage](/img/squirrels-studio-lineage.png)

:::tip

You can also build and run the API server in one command by running `sqrl run --build`.

:::


[sqrl new]: ../../references/cli/new
[sqrl build]: ../../references/cli/build
[sqrl duckdb]: ../../references/cli/duckdb
[sqrl run]: ../../references/cli/run