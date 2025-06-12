// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source with SLU',
  tagline: 'Opening innovation with tomorrow’s tech leaders',
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
          height: 60,
          width: 205,
          style: {
            height: '80px',
            width: '225px',
            marginTop: '-20px',
            marginLeft: '15px',
            borderRadius: '0px 0px 30px 30px',
            background: '#fff',
            padding: '10px',
            boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.1)',
            },
        },
        items: [
          {
            type: 'dropdown',
            position: 'left',
            label: 'Programs',
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
                docId: 'connect_with/partner'
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
            label: 'Resources',
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
            label: 'Our Team',
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
            type: 'doc',
            docId: 'connect_with/donate',
            label: 'Donate',
            position: 'right',
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
                to: '/programs/experiential_learning',
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
            ]
          },
          {
            title: 'Get Involved',
            items: [
              {
                label: 'Find out how to get involved',
                to: '/engage/',
              },
              {
                label: 'Join with OSS',
                to: '/engage/#join',
              },
              {
                label: 'Partner with OSS',
                to: '/engage/#partner',
              },
              {
                label: 'Sponsor Open Source with SLU',
                to: '/engage/#consult',
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
