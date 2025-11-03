import type {SidebarsConfig} from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  docs: [
    "docs/intro",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      link: { 
        type: "doc", 
        id: "docs/start/index"
      },
      items: [
        "docs/start/quickstart",
        "docs/start/tutorial",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      link: { 
        type: "generated-index",
        description: `Concepts of the Squirrels framework.`,
        slug: "docs/concepts"
      },
      items: [
        "docs/concepts/project",
        "docs/concepts/squirrels-yml",
        "docs/concepts/environment",
        "docs/concepts/connections",
        "docs/concepts/user",
        "docs/concepts/parameters",
        "docs/concepts/context",
        "docs/concepts/macros",
        "docs/concepts/column-types",
        {
          type: "category",
          label: "Data Models",
          collapsed: false,
          link: { 
            type: "doc", 
            id: "docs/concepts/models"
          },
          items: [
            "docs/concepts/models-source",
            "docs/concepts/models-seed",
            "docs/concepts/models-build",
            "docs/concepts/models-dbview",
            "docs/concepts/models-federate",
          ]
        },
        "docs/concepts/dashboards",
        "docs/concepts/dateutils",
        "docs/concepts/studio",
      ]
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      link: { 
        type: "generated-index",
        description: `Guides for using Squirrels.`,
        slug: "docs/guides"
      },
      items: [
        "docs/guides/mcp",
        "docs/guides/deploy",
        "docs/guides/sql-injection",
        "docs/guides/ml-models",
        "docs/guides/merge-data",
        "docs/guides/interact-in-python",
        "docs/guides/data-freshness",
      ]
    },
  ],
  references: [
    {
      type: "category",
      label: "CLI References",
      collapsed: false,
      link: { 
        type: "doc", 
        id: "references/cli/index"
      },
      items: [
        "references/cli/new",
        "references/cli/get-file",
        "references/cli/deps",
        "references/cli/compile",
        "references/cli/build",
        "references/cli/duckdb",
        "references/cli/run",
      ]
    },
    {
      type: "category",
      label: "REST APIs",
      collapsed: false,
      link: {
        type: "doc", 
        id: "references/rest/index"
      },
      items: [
        "references/rest/authentication",
        "references/rest/user-management",
        "references/rest/project-metadata",
        "references/rest/data-management",
        "references/rest/datasets-dashboards",
        "references/rest/parameters",
      ]
    },
    {
      type: "category",
      label: "Python APIs",
      collapsed: false,
      link: {
        type: "generated-index",
        description: 
          `References for Python classes and functions available in the Squirrels python library`,
        slug: "references/python"
      },
      items: [
        {
          type: "category",
          label: "dateutils (module)",
          link: {
            type: "generated-index",
            description: 
              "All classes and enums below are available to import from the \"dateutils\" module.",
            slug: "references/python/dateutils"
          },
          items: [
            "references/python/dateutils/DayOfWeekEnum",
            "references/python/dateutils/MonthEnum",
            {
              type: "category",
              label: "DayIdxOf... (classes)",
              link: {
                type: "doc",
                id: "references/python/dateutils/DayIdxOf"
              },
              items: [
                "references/python/dateutils/DayIdxOfMonthsCycle",
                "references/python/dateutils/DayIdxOfYear",
                "references/python/dateutils/DayIdxOfQuarter",
                "references/python/dateutils/DayIdxOfMonth",
                "references/python/dateutils/DayIdxOfWeek",
              ]
            },
            {
              type: "category",
              label: "Offset... (classes)",
              link: {
                type: "doc",
                id: "references/python/dateutils/Offset"
              },
              items: [
                "references/python/dateutils/OffsetYears",
                "references/python/dateutils/OffsetMonths",
                "references/python/dateutils/OffsetWeeks",
                "references/python/dateutils/OffsetDays",
              ]
            },
            "references/python/dateutils/DateModPipeline",
            "references/python/dateutils/DateStringModifier",
            "references/python/dateutils/TimestampModifier",
            "references/python/dateutils/types",
          ]
        },
        {
          type: "category",
          label: "squirrels.arguments (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from the \"squirrels.arguments\" module or directly from the \"squirrels\" module.",
            slug: "references/python/arguments"
          },
          items: [
            "references/python/arguments/ConnectionsArgs",
            "references/python/arguments/AuthProviderArgs",
            "references/python/arguments/ParametersArgs",
            "references/python/arguments/BuildModelArgs",
            "references/python/arguments/ContextArgs",
            "references/python/arguments/ModelArgs",
            "references/python/arguments/DashboardArgs",
          ]
        },
        {
          type: "category",
          label: "squirrels.connections (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from the \"squirrels.connections\" module or directly from the \"squirrels\" module.",
            slug: "references/python/connections"
          },
          items: [
            "references/python/connections/ConnectionTypeEnum",
            "references/python/connections/ConnectionProperties",
          ]
        },
        {
          type: "category",
          label: "squirrels.auth (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from the \"squirrels.auth\" module or directly from the \"squirrels\" module.",
            slug: "references/python/auth"
          },
          items: [
            "references/python/auth/BaseUser",
            "references/python/auth/provider",
            "references/python/auth/ProviderConfigs",
          ]
        },
        {
          type: "category",
          label: "squirrels.parameter_options (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from the \"squirrels.parameter_options\" module or directly from the \"squirrels\" module.",
            slug: "references/python/parameter_options"
          },
          items: [
            "references/python/parameter_options/SelectParameterOption",
            "references/python/parameter_options/DateParameterOption",
            "references/python/parameter_options/DateRangeParameterOption",
            "references/python/parameter_options/NumberParameterOption",
            "references/python/parameter_options/NumberRangeParameterOption",
            "references/python/parameter_options/TextParameterOption",
          ]
        },
        {
          type: "category",
          label: "squirrels.data_sources (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from the \"squirrels.data_sources\" module or directly from the \"squirrels\" module.",
            slug: "references/python/data_sources"
          },
          items: [
            "references/python/data_sources/SelectDataSource",
            "references/python/data_sources/DateDataSource",
            "references/python/data_sources/DateRangeDataSource",
            "references/python/data_sources/NumberDataSource",
            "references/python/data_sources/NumberRangeDataSource",
            "references/python/data_sources/TextDataSource",
          ]
        },
        {
          type: "category",
          label: "squirrels.parameters (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from the \"squirrels.parameters\" module or directly from the \"squirrels\" module.",
            slug: "references/python/parameters"
          },
          items: [
            "references/python/parameters/SingleSelectParameter",
            "references/python/parameters/MultiSelectParameter",
            "references/python/parameters/DateParameter",
            "references/python/parameters/DateRangeParameter",
            "references/python/parameters/NumberParameter",
            "references/python/parameters/NumberRangeParameter",
            "references/python/parameters/TextParameter",
          ]
        },
        {
          type: "category",
          label: "squirrels.dashboards (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from the \"squirrels.dashboards\" module or directly from the \"squirrels\" module.",
            slug: "references/python/dashboards"
          },
          items: [
            "references/python/dashboards/PngDashboard",
            "references/python/dashboards/HtmlDashboard",
          ]
        },
        {
          type: "category",
          label: "squirrels.types (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: `
              All classes below are available to import from the \"squirrels.types\" module or directly from the \"squirrels\" module.
              These classes should not be instantiated, and should only be used as type hints (which helps code editors to provide autocomplete suggestions) or to create derived classes from.
            `,
            slug: "references/python/types"
          },
          items: [
            "references/python/types/DataSource",
            "references/python/types/ParameterOption",
            "references/python/types/Parameter",
            "references/python/types/TextValue",
            "references/python/types/DatasetMetadata",
            "references/python/types/DatasetResult",
            "references/python/types/Dashboard",
          ]
        },
        {
          type: "category",
          label: "squirrels (module)",
          collapsed: false,
          link: {
            type: "generated-index",
            description: 
              "All classes below are available to import from only the \"squirrels\" module and no other submodule.",
            slug: "references/python/squirrels"
          },
          items: [
            "references/python/SquirrelsProject",
          ]
        },
      ]
    },
  ],
};

export default sidebars;
