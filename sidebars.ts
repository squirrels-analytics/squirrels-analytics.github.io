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
      label: "Quickstart Tutorial",
      link: { 
        type: "generated-index", 
        title: "Tutorial",
        description: 
          `This tutorial will guide you through creating your own Squirrels APIs! You will start with a single command to create a sample 
          Squirrels project (for expense transactions analytics), and then alter the project to create your own APIs for weather analytics. 
          Once you"ve completed the tutorial, you will understand most of the key features of Squirrels!`,
        slug: "category/tutorial"
      },
      items: [
        "docs/tutorial/initialize",
        "docs/tutorial/project-file",
        "docs/tutorial/parameters",
        "docs/tutorial/queries",
        "docs/tutorial/test-api",
        "docs/tutorial/context",
        "docs/tutorial/what-next",
      ],
    },
    {
      type: "category",
      label: "Developer Topics",
      link: { 
        type: "generated-index", 
        title: "Developer Topics",
        description: 
          `Topics on developing projects with the Squirrels framework`,
        slug: "category/topics"
      },
      items: [
        "docs/topics/project",
        "docs/topics/project-file",
        "docs/topics/settings",
        "docs/topics/environcfg",
        "docs/topics/database",
        "docs/topics/parameters",
        "docs/topics/context",
        "docs/topics/models-sql",
        "docs/topics/models-python",
        "docs/topics/auth",
        "docs/topics/dateutils",
        {
          type: "category",
          label: "Tips & Tricks",
          items: [
            "docs/topics/tips/versioning",
            "docs/topics/tips/deployment",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Frontend Topics",
      link: { 
        type: "generated-index", 
        title: "Frontend Topics",
        description: 
          `Topics on using REST APIs developed by a Squirrels project`,
        slug: "category/frontend"
      },
      items: [
        "docs/frontend/rest-api",
        "docs/frontend/best-practices",
      ]
    },
  ],
  references: [
    {
      type: "category",
      label: "CLI References",
      link: { 
        type: "generated-index", 
        title: "CLI References",
        description: 
          `References for Squirrels CLI commands`,
        slug: "category/cli"
      },
      items: [
        "references/cli/init",
        "references/cli/deps",
        "references/cli/compile",
        "references/cli/run",
      ]
    },
    {
      type: "category",
      label: "Python Classes",
      link: {
        type: "generated-index", 
        title: "Python Classes",
        description: 
          `References for Python classes and functions available in the Squirrels python library`,
        slug: "category/python"
      },
      items: [
        {
          type: "category",
          label: "from squirrels.argument",
          items: [
            "references/python/arguments/ConnectionsArgs",
            "references/python/arguments/ParametersArgs",
            "references/python/arguments/ContextArgs",
            "references/python/arguments/ModelDepsArgs",
            "references/python/arguments/ModelArgs",
            "references/python/arguments/AuthArgs",
          ]
        },
        {
          type: "category",
          label: "from squirrels.parameter_options",
          items: [
            "references/python/parameter_options/ParameterOption",
            "references/python/parameter_options/SelectParameterOption",
            "references/python/parameter_options/DateParameterOption",
            "references/python/parameter_options/DateRangeParameterOption",
            "references/python/parameter_options/NumberParameterOption",
            "references/python/parameter_options/NumberRangeParameterOption",
          ]
        },
        {
          type: "category",
          label: "from squirrels.data_sources",
          items: [
            "references/python/data_sources/DataSource",
            "references/python/data_sources/SingleSelectDataSource",
            "references/python/data_sources/MultiSelectDataSource",
            "references/python/data_sources/DateDataSource",
            "references/python/data_sources/DateRangeDataSource",
            "references/python/data_sources/NumberDataSource",
            "references/python/data_sources/NumberRangeDataSource",
          ]
        },
        {
          type: "category",
          label: "from squirrels.parameters",
          items: [
            "references/python/parameters/Parameter",
            "references/python/parameters/SingleSelectParameter",
            "references/python/parameters/MultiSelectParameter",
            "references/python/parameters/DateParameter",
            "references/python/parameters/DateRangeParameter",
            "references/python/parameters/NumberParameter",
            "references/python/parameters/NumberRangeParameter",
          ]
        },
        {
          type: "category",
          label: "from squirrels.user_base",
          items: [
            "references/python/user_base/User",
            "references/python/user_base/WrongPassword",
          ]
        },
        {
          type: "category",
          label: "from squirrels.dateutils",
          items: [
            "references/python/dateutils/DayOfWeek",
            "references/python/dateutils/Month",
            "references/python/dateutils/DayIdxOfCalendarUnit",
            "references/python/dateutils/DayIdxOfMonthsCycle",
            "references/python/dateutils/DayIdxOfYear",
            "references/python/dateutils/DayIdxOfQuarter",
            "references/python/dateutils/DayIdxOfMonth",
            "references/python/dateutils/DayIdxOfWeek",
            "references/python/dateutils/OffsetUnits",
            "references/python/dateutils/OffsetYears",
            "references/python/dateutils/OffsetMonths",
            "references/python/dateutils/OffsetWeeks",
            "references/python/dateutils/OffsetDays",
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
