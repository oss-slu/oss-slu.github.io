// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source with SLU',
  tagline: 'Opening innovation with future leaders',
  url: 'https://oss-slu.github.io/',
  baseUrl: '/',
  favicon: '/img/favicon.ico',
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
          routeBasePath: '/',
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
      image: 'img/oss-logo-2.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'Open Source with SLU',
          src: 'img/navbar-logo-2.png',
          href: 'https://oss-slu.github.io/',
          target: '_self',
          className: 'oss-navbar-logo', 
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Program',
            items: [
              {
                label: 'Experiential Learning',
                type: 'doc',
                docId: 'programs/experiential_learning',
              },
              {
                label: 'Consulting',
                type: 'doc',
                docId: 'programs/consulting',
              },
              {
                label: 'Advocacy',
                type: 'doc',
                docId: 'programs/advocacy',
              }
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Projects',
            items: [
              {
                label: 'Software Portfolio',
                type: 'doc',
                docId: 'projects/portfolio',
              },
              {
                label: 'OSS Across SLU',
                type: 'doc',
                docId: 'projects/oss-across-slu',
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Connect',
            items: [
              {
                label: 'Participate (as an individual)',
                type: 'doc',
                docId: 'connect_with/participants'
              },
              {
                label: 'Partner (as an organization)',
                type: 'doc',
                docId: 'connect_with/partners'
              },
              {
                label: 'Consult with an expert',
                type: 'doc',
                docId: 'connect_with/consult'
              },
            ]            
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Docs',
            items: [
              {
                label: 'All About \'Open\'',
                type: 'doc',
                docId: 'resources/open/open',
              },
              {
                label: 'Program Playbooks',
                type: 'doc',
                docId: 'resources/playbooks/playbook',
              },
              {
                label: 'Guides for Participants',
                type: 'doc',
                docId: 'resources/role_guides/role_guides',
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Team',
            items: [
              {
                label: 'Leadership',
                type: 'doc',
                docId: 'people/leadership',
              },
              {
                label: 'Staff',
                type: 'doc',
                docId: 'people/staff',
              },
              {
                label: 'Contributors',
                type: 'doc',
                docId: 'people/contributors',
              },
              { 
                label: 'Affiliations',
                type: 'doc',
                docId: 'people/affiliations'
              },
            ]
          },
          {to: '/news', label: 'News', position: 'left'},
          {
            type: 'custom-SlackButton',
            position: 'right',
            className: 'navbar__item navbar__link button button--secondary button--lg',
          },
          {
            type: 'doc',
            docId: 'connect_with/donate',
            label: 'Donate',
            position: 'right',
            className: 'button button--secondary button--lg',
          },
          {
            href: 'https://github.com/oss-slu',
            label: 'Find us on GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Open Source with SLU',
            items: [
              {
                label: 'Programs',
                to: '/programs/',
              },
              {
                label: 'Projects',
                to: '/projects/portfolio',
              },
              {
                label: 'Resources',
                to: '/resources/open',
              },
              {
                label: 'People',
                to: '/people/leadership',
              },
              {
                label: 'News',
                to: '/news',
              },
            ]
          },
          {
            title: 'Get Involved',
            items: [
              {
                label: 'Find out how to get involved',
                to: '/connect_with/oss',
              },
              {
                label: 'Join with OSS',
                to: '/connect_with/participants',
              },
              {
                label: 'Partner with OSS',
                to: '/connect_with/partners',
              },
              {
                label: 'Consult wiht OSS',
                to: '/connect_with/consulting',
              },
              {
                label: 'Sponsor Open Source with SLU',
                to: '/connect_with/donations',
              },
            ],
          },
          {
            title: 'Saint Louis University',
            items: [
              {
                label: 'slu.edu',
                href: 'https://slu.edu',
              },
              {
                label: 'SSE',
                href: 'https://www.slu.edu/science-and-engineering/index.php'
              },
              {
                label: 'Research',
                href: 'https://www.slu.edu/research/about-slu-research/index.php'
              },
              {
                label: 'Libraries',
                href: 'https://www.slu.edu/library/index.php',
              },
              {
                label: 'Github',
                href: 'https://github.com/oss-slu',
              },
            ],
          },
          {
            title: 'Stay Connected',
            items: [
              {
                label: 'OSS News',
                to: '/news',
              },
              { label: 'OSS on LinkedIn',
                href: 'https://www.linkedin.com/company/open-source-with-slu/'
              },
              {
                label: 'OSS on GitHub',
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
