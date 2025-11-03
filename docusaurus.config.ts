import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Squirrels',
  tagline: 'The Modern API Framework for Data Analytics',
  favicon: 'img/squirrels.ico',

  // Set the production url of your site here
  url: 'https://squirrels-analytics.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'squirrels-analytics', // Usually your GitHub org/user name.
  projectName: 'squirrels-analytics.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          lastVersion: 'current',
          versions: {
            current: {
              // label: 'Canary 🚧'
              label: '0.5.x 🚧'
            }
          }
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-ETDDKNQF7K',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: '75NQZQD98W',

      // Public API key: it is safe to commit it
      apiKey: '196b977a6ab22ec26d442637211aee89',

      indexName: 'squirrels-analyticsio',

      // Optional: see doc section below
      contextualSearch: true,
    },
    image: 'img/squirrels.jpg',
    metadata: [
      {name: 'keywords', content: 'squirrels, python, data, analytics, api, framework, mcp'}
    ],
    docs: {
      sidebar: {
        // autoCollapseCategories: true,
      },
    },
    navbar: {
      title: 'Squirrels',
      logo: {
        alt: 'Squirrels Logo',
        src: 'img/squirrels_large.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'references',
          position: 'left',
          label: 'References',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'releases', 
        //   label: 'Release Notes', 
        //   position: 'left'
        // },
        {
          type: 'docsVersionDropdown',
          position: 'left'
        },
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/squirrels-analytics/squirrels',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/docs/intro',
            },
            {
              label: 'Getting Started',
              to: '/docs/docs/start',
            },
            {
              label: 'Concepts',
              to: '/docs/docs/concepts'
            },
            {
              label: 'Guides',
              to: '/docs/docs/guides'
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'CLI References',
              to: '/docs/references/cli',
            },
            {
              label: 'REST APIs',
              to: '/docs/references/rest',
            },
            {
              label: 'Python APIs',
              to: '/docs/references/python',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/AXYn9rxTgP',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/squirrels-analytics/squirrels',
            },
            {
              label: 'PyPI',
              href: 'https://pypi.org/project/squirrels/'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Squirrels, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
