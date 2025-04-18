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
        "docs/start/install",
        "docs/start/new-project",
        "docs/start/run-project",
        "docs/start/tutorial",
      ],
    },
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      link: { 
        type: "generated-index",
        description: 
          `Concepts of the Squirrels framework.`,
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
      ]
    },
    {
      type: "category",
      label: "Guides",
      collapsed: false,
      link: { 
        type: "generated-index",
        description: `Guides for using Squirrels.`,
      },
      items: [
        "docs/guides/sql-injection",
        "docs/guides/deploy",
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
      label: "Python APIs",
      collapsed: false,
      link: {
        type: "generated-index",
        description: 
          `References for Python classes and functions available in the Squirrels python library`,
        slug: "references/python"
      },
      items: [
        // {
        //   type: "category",
        //   label: "squirrels.argument (module)",
        //   items: [
        //     "references/python/arguments/ConnectionsArgs",
        //     "references/python/arguments/ParametersArgs",
        //     "references/python/arguments/ContextArgs",
        //     "references/python/arguments/ModelDepsArgs",
        //     "references/python/arguments/ModelArgs",
        //     "references/python/arguments/DashboardArgs",
        //     "references/python/arguments/AuthArgs",
        //   ]
        // },
        // {
        //   type: "category",
        //   label: "squirrels.parameter_options (module)",
        //   items: [
        //     "references/python/parameter_options/ParameterOption",
        //     "references/python/parameter_options/SelectParameterOption",
        //     "references/python/parameter_options/DateParameterOption",
        //     "references/python/parameter_options/DateRangeParameterOption",
        //     "references/python/parameter_options/NumberParameterOption",
        //     "references/python/parameter_options/NumberRangeParameterOption",
        //     "references/python/parameter_options/TextParameterOption",
        //   ]
        // },
        // {
        //   type: "category",
        //   label: "squirrels.data_sources (module)",
        //   items: [
        //     "references/python/data_sources/DataSource",
        //     "references/python/data_sources/SelectDataSource",
        //     "references/python/data_sources/DateDataSource",
        //     "references/python/data_sources/DateRangeDataSource",
        //     "references/python/data_sources/NumberDataSource",
        //     "references/python/data_sources/NumberRangeDataSource",
        //     "references/python/data_sources/TextDataSource",
        //   ]
        // },
        // {
        //   type: "category",
        //   label: "squirrels.parameters (module)",
        //   items: [
        //     "references/python/parameters/Parameter",
        //     "references/python/parameters/SingleSelectParameter",
        //     "references/python/parameters/MultiSelectParameter",
        //     "references/python/parameters/DateParameter",
        //     "references/python/parameters/DateRangeParameter",
        //     "references/python/parameters/NumberParameter",
        //     "references/python/parameters/NumberRangeParameter",
        //     "references/python/parameters/TextParameter",
        //     "references/python/parameters/TextValue",
        //   ]
        // },
        // {
        //   type: "category",
        //   label: "squirrels.dashboards (module)",
        //   items: [
        //     "references/python/dashboards/Dashboard",
        //     "references/python/dashboards/PngDashboard",
        //     "references/python/dashboards/HtmlDashboard",
        //   ]
        // },
        // {
        //   type: "category",
        //   label: "squirrels.user_base (module)",
        //   items: [
        //     "references/python/user_base/User",
        //     "references/python/user_base/WrongPassword",
        //   ]
        // },
        // {
        //   type: "category",
        //   label: "squirrels.project (module)",
        //   items: [
        //     "references/python/project/SquirrelsProject",
        //   ]
        // },
        {
          type: "category",
          label: "dateutils (module)",
          link: {
            type: "generated-index",
            description: 
              "All classes and enums below are available to import from the dateutils module.",
            slug: "references/python/dateutils"
          },
          items: [
            "references/python/dateutils/DayOfWeek",
            "references/python/dateutils/Month",
            {
              type: "category",
              label: "DayIdxOf...",
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
              label: "Offset...",
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
          ]
        }
      ]
    },
  ],
};

export default sidebars;
