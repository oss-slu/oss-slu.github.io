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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Old connect_with/* pages → new get_involved/* locations
          { from: '/connect_with/participants', to: '/get_involved/contribute' },
          { from: '/connect_with/community', to: '/get_involved/community' },
          { from: '/connect_with/experience', to: '/get_involved/experience' },
          { from: '/connect_with/leadership', to: '/get_involved/leadership' },
          { from: '/connect_with/mentor', to: '/get_involved/mentor' },
          { from: '/connect_with/partners', to: '/get_involved/partner' },
          { from: '/connect_with/engage', to: '/get_involved/engage' },
          { from: '/connect_with/solutions', to: '/get_involved/solutions' },
          { from: '/connect_with/talent', to: '/get_involved/talent' },
          { from: '/connect_with/sponsor', to: '/get_involved/sponsor' },
          { from: '/connect_with/consult', to: '/get_involved/get_help' },
          { from: '/connect_with/rse', to: '/get_involved/rse' },
          { from: '/connect_with/training', to: '/get_involved/training' },
          { from: '/connect_with/data', to: '/get_involved/data' },
          { from: '/connect_with/open_science', to: '/get_involved/open_science' },
          { from: '/connect_with/donate', to: '/get_involved/donate' },
        ],
      },
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
                label: 'Students',
                type: 'doc',
                docId: 'connect_with/student_opportunities',
              },
              {
                label: 'Researchers',
                type: 'doc',
                docId: 'connect_with/researcher_opportunities',
              },
              {
                label: 'Community',
                type: 'doc',
                docId: 'connect_with/community_opportunities',
              },
              {
                label: 'Organizations',
                type: 'doc',
                docId: 'connect_with/organization_opportunities',
              },
              {
                label: 'Volunteers',
                type: 'doc',
                docId: 'connect_with/volunteer_opportunities',
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Get Involved',
            items: [
              {
                label: 'Contribute',
                type: 'doc',
                docId: 'get_involved/contribute',
              },
              {
                label: 'Partner',
                type: 'doc',
                docId: 'get_involved/partner',
              },
              {
                label: 'Get Help',
                type: 'doc',
                docId: 'get_involved/get_help',
              },
              {
                label: 'Support Us',
                type: 'doc',
                docId: 'get_involved/donate',
              },
              {
                label: 'Join Slack',
                href: 'https://join.slack.com/t/oswslu/shared_invite/zt-24f0qhjbo-NkSfQ4LOg5wXxBdxP4vzfA',
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'About',
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
                docId: 'people/affiliations',
              },
              {
                label: 'Open Knowledge',
                type: 'doc',
                docId: 'resources/open/open',
              },
              {
                label: 'Playbooks & Guides',
                type: 'doc',
                docId: 'resources/playbooks/playbook',
              },
              {to: '/news', label: 'News'},
            ]
          },
          {
            type: 'doc',
            docId: 'get_involved/donate',
            label: 'Donate',
            position: 'right',
            className: 'button button--secondary button--lg',
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
                label: 'Experiential Learning',
                to: '/programs/experiential_learning',
              },
              {
                label: 'Consulting',
                to: '/programs/consulting',
              },
              {
                label: 'Advocacy',
                to: '/programs/advocacy',
              },
              {
                html: '<a href="/projects/portfolio" class="footer__link-item"><strong>Projects</strong></a>',
              },
              {
                html: '<a href="/people/leadership" class="footer__link-item"><strong>About</strong></a>',
              },
            ]
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Students',
                to: '/connect_with/student_opportunities',
              },
              {
                label: 'Researchers',
                to: '/connect_with/researcher_opportunities',
              },
              {
                label: 'Community',
                to: '/connect_with/community_opportunities',
              },
              {
                label: 'Organizations',
                to: '/connect_with/organization_opportunities',
              },
              {
                label: 'Volunteers',
                to: '/connect_with/volunteer_opportunities',
              },
            ],
          },
          {
            title: 'Get Involved',
            items: [
              {
                label: 'Contribute',
                to: '/get_involved/contribute',
              },
              {
                label: 'Partner',
                to: '/get_involved/partner',
              },
              {
                label: 'Get Help',
                to: '/get_involved/get_help',
              },
              {
                label: 'Support Us',
                to: '/get_involved/donate',
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
              {
                label: 'OSS on LinkedIn',
                href: 'https://www.linkedin.com/company/open-source-with-slu/',
              },
              {
                label: 'OSS on Slack',
                href: 'https://join.slack.com/t/oswslu/shared_invite/zt-24f0qhjbo-NkSfQ4LOg5wXxBdxP4vzfA',
              },
              {
                html: '<hr style="border-color: rgba(255,255,255,0.2); margin: 0.5rem 0;" />',
              },
              {
                label: 'SLU.edu',
                href: 'https://slu.edu',
              },
              {
                label: 'School of Science & Engineering',
                href: 'https://www.slu.edu/science-and-engineering/index.php',
              },
              {
                label: 'SLU Research',
                href: 'https://www.slu.edu/research/about-slu-research/index.php',
              },
              {
                label: 'SLU Libraries',
                href: 'https://www.slu.edu/library/index.php',
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
