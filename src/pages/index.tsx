import clsx from 'clsx';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Feature data
const FeatureList = [
  {
    title: 'Easy Installation & Setup',
    icon: '🚀',
    description: (
      <>
        Run <code>pip install squirrels</code> and <code>sqrl new</code> to bootstrap a new Squirrels project in seconds.
      </>
    ),
  },
  {
    title: 'Connect & Model',
    icon: '🛠️',
    description: (
      <>
        Connect to any database and model your data with Jinja-templated SQL or Python. Reference and combine models across data sources.
      </>
    ),
  },
  {
    title: 'AI Integration',
    icon: '🤖',
    description: (
      <>
        Create dataset APIs that AI agents can interactive with to provide valuable insights. Use the dataset APIs as guardrails for how AI agents can query your data.
      </>
    ),
  },
  {
    title: 'Secure & Scale',
    icon: '🔒',
    description: (
      <>
        Built-in user management, access controls, and token authentication. Scale your analytics from prototype to production.
      </>
    ),
  },
  {
    title: 'Multiple Data Connections',
    icon: '🔌',
    description: (
      <>
        Specify connections to multiple databases or data warehouses in a single project! Connect to PostgreSQL, BigQuery, Snowflake, and more.
      </>
    ),
  },
  {
    title: 'Customizable Parameters',
    icon: '⚙️',
    description: (
      <>
        Create parameters with Python or YAML. Build interactive datasets or dashboards that respond to user inputs and parameter selections.
      </>
    ),
  },
  {
    title: 'Flexible Data Modeling',
    icon: '🔀',
    description: (
      <>
        Write data models in Jinja-templated SQL or Python. Create static models for offline data or dynamic models for real-time processing.
      </>
    ),
  },
  {
    title: 'Static Data Models',
    icon: '📦',
    description: (
      <>
        Define sources from databases, use seeds from CSV files, or create builds with SQL/Python that execute offline and reference other static models.
      </>
    ),
  },
  {
    title: 'Dynamic Data Models',
    icon: '⚡',
    description: (
      <>
        Create dbview models that run on external databases or federate models that can combine data from multiple sources in a temporary in-memory database.
      </>
    ),
  },
  {
    title: 'Configurable Output Datasets',
    icon: '🛒',
    description: (
      <>
        Define datasets (usable by AI agents or visualizations) in YAML by specifying target models, applicable parameters, and access controls for security.
      </>
    ),
  },
  {
    title: 'Visualization Freedom',
    icon: '📈',
    description: (
      <>
        Create dashboards using your favorite Python visualization libraries like Plotly, Matplotlib, Altair, or any other library you prefer.
      </>
    ),
  },
  {
    title: 'Simple Deployment',
    icon: '🖥️',
    description: (
      <>
        Run <code>sqrl build</code> to pre-build static models and <code>sqrl run</code> to activate the API server with built-in user management.
      </>
    ),
  },
];

function CodeSnippet() {
  return (
    <div className={styles.codeBlock}>
      <pre>
        <code>
          <span className={styles.comment}># Install Squirrels and initialize a new project from a new directory</span>
          <br />
          <span className={styles.command}>cd my-squirrels-project</span>
          <br />
          <span className={styles.command}>pip install squirrels</span>
          <br />
          <span className={styles.command}>sqrl new --curr-dir</span>
          <br /><br />
          <span className={styles.comment}># Build static models and run the API server</span>
          <br />
          <span className={styles.command}>sqrl build</span>
          <br />
          <span className={styles.command}>sqrl run</span>
        </code>
      </pre>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--6', styles.heroText)}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <p className={styles.heroDescription}>
              Build feature-rich data analytics applications with a powerful Python framework that simplifies data source connections, 
              data models, and interactive datasets and dashboards. <b>Includes built-in MCP servers</b> to
              power AI agents with user-permissioned business intelligence.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg margin-right--md"
                to="/docs/docs/start">
                Get Started
              </Link>
              <Link
                className="button button--outline button--lg"
                to="/docs/docs/intro">
                Documentation
              </Link>
            </div>
          </div>
          <div className={clsx('col col--6', styles.heroCode)}>
            <CodeSnippet />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Create Data Applications in Minutes</Heading>
          <p className={styles.sectionSubtitle}>Squirrels handles the complexity, you focus on your analytics</p>
        </div>
        <div className={clsx('row', styles.featureRows)}>
          {FeatureList.map((props, idx) => (
            <div className="col col--4" key={idx}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{props.icon}</div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="Squirrels - The Modern API Framework for Data Analytics">
      <Head>
        <meta name="keywords" content="python, squirrels, data, analytics, api, framework, duckdb, data modeling, dashboards" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
