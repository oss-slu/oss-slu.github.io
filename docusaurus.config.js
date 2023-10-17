// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source with SLU',
  tagline: 'Experience - Education - Research',
  url: 'https://oss-slu.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oss-slu', // Usually your GitHub org/user name.
  projectName: 'oss-slu.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: '/news/',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Open Source with SLU',
          src: 'img/oss-logo-2.png',
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'About Us',
            items: [
              {
                label: 'About',
                type: 'doc',
                docId: 'about/about',
              },
              {
                label: 'Student Partners',
                type: 'doc',
                docId: 'about/students',
              },
              {
                label: 'Researcher Partners',
                type: 'doc',
                docId: 'about/researchers',
              },
              {
                label: 'Community Partners',
                type: 'doc',
                docId: 'about/community',
              },
              {
                label: 'Industry Partners',
                type: 'doc',
                docId: 'about/industry',
              }
            ]
            
          },
          {
            type: 'doc',
            docId: 'portfolio',
            position: 'left',
            label: 'Portfolio',
          },
          {to: '/news', label: 'News', position: 'left'},
          {
            href: 'https://github.com/oss-slu',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Information',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'slu.edu',
                href: 'https://slu.edu',
              },
              {
                label: 'Github',
                href: 'https://github.com/oss-slu',
              },
            ],
          },
          {
            title: 'Stay up to date',
            items: [
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/oss-slu',
              },
            ],
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
