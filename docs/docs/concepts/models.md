# Data Models

Data models in Squirrels define the structure and transformation of your data through a logical pipeline. They are the building blocks that transform raw data into actionable insights.

## Overview

Squirrels uses a layered approach to data modeling, where each layer serves a specific purpose in the data transformation pipeline:

1. **Base Layer**: Sources and seeds provide raw data from external systems and internal reference data
2. **Transformation Layer**: Build models, dbview models, and federate models transform and prepare data for analysis with SQL or Python queries

This approach creates a modular, reusable, and maintainable data transformation pipeline for both offline ETL and real-time BI analytics.

## Types of Models

Squirrels supports five types of data models:
- 3 types of static data models with sources, seeds, and build models
- 2 types of dynamic data models with dbview models and federate models

### 1. Sources

Sources connect to external data sources such as databases or data warehouses. They define how data is extracted from these sources and loaded into your project's virtual data environment (a DuckDB database).

Key features:
- Connect to various external databases
- Support for incremental loading through update hints
- Enforce column types with metadata

[Learn more about Sources →](./models-source)

### 2. Seeds

Seeds are small, static datasets that are included directly in (and version controlled with) your project. They are typically used for lookup tables, reference data, or other small datasets that change infrequently.

Key features:
- CSV files with accompanying YAML metadata
- Automatic schema inference or explicit type casting
- Perfect for reference data, lookups, and configuration data

[Learn more about Seeds →](./models-seed)

### 3. Build Models

Build models are materialized during the build process, creating tables or views in the DuckDB environment. They support both SQL and Python transformations and are designed for complex data manipulations that need to be persisted.

Key features:
- Materialization as tables or views
- Support for both SQL and Python transformations
- Pass-through columns to inherit metadata
- Dependency tracking and resolution

[Learn more about Build Models →](./models-build)

### 4. Dbview Models

Dbview models are SQL transformations that run directly on the source database. They are useful for performing initial transformations and aggregations close to the data source, which can improve latency when working with live data by reducing the amount of data transferred.

Key features:
- Execute SQL directly on source databases
- Option to translate to DuckDB dialect and run on the virtual data environment instead for DuckDB performance
- Access to source models via the `source()` macro
- Parameter-driven filtering and transformation

[Learn more about Dbview Models →](./models-dbview)

### 5. Federate Models

Federate models are the final layer in your data transformation pipeline. They are similar to dbview models except they run in the API server instead of the source database. They combine data from multiple sources and models, such as static models in the virtual data environment, dbview models, and other federate models.

Key features:
- Parameter-driven dynamic transformations
- Support for both SQL and Python implementations
- Reference any type of data model to combine data into a single result

[Learn more about Federate Models →](./models-federate)

## Key Concepts

### Dependencies and DAG

Models can depend on other models, creating a directed acyclic graph (DAG) of data transformations. Squirrels automatically:
- Resolves model dependencies
- Determines the proper execution order
- Validates that there are no circular dependencies
- Manages the flow of data between models

### Materialization

Models can be materialized in different ways:
- **Source Models**: Loaded into DuckDB or accessed directly
- **Seed Models**: Stored in memory as Polars dataframes and materialized as tables during the build process
- **Build Models**: Materialized as tables or views during the build process
- **Dbview Models**: Executed on the source database or in DuckDB
- **Federate Models**: Stored in a temporary in-memory DuckDB database as tables or views based on the `eager` setting

### Column Metadata

Each model defines its columns with rich metadata:
- **name**: Column name
- **type**: Data type (string, integer, float, etc.)
- **description**: Human-readable description
- **category**: Dimension, measure, or misc
- **depends_on**: List of upstream columns

### Pass-through Columns

Models can inherit column metadata from upstream models using pass-through columns, which:
- Reduce duplicate metadata
- Ensure consistency across models
- Simplify configuration

### SQL and Python Support

Build models and federate models support both SQL and Python implementations:
- **SQL Models**: Use Jinja templating and SQL
- **Python Models**: Python functions that return Polars or Pandas DataFrames
