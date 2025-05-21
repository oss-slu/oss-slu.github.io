// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source with SLU',
  tagline: 'Experience - Education - Research',
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
            label: 'People',
            items: [
              {
                label: 'Current',
                type: 'doc',
                docId: 'people/current',
              },
              {
                label: 'Alumni',
                type: 'doc',
                docId: 'people/alumni',
              },
            ]
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Programs',
            items: [
              {
                label: 'Programs & Initiatives',
                type: 'doc',
                docId: 'programs/programs',
              },
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
            type: 'doc',
            docId: 'portfolio',
            position: 'left',
            label: 'Portfolio',
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Engage',
            items: [
              {
                label: 'Engage with OSS',
                type: 'doc',
                docId: 'engage/engage'
              },
              {
                label: 'Software Development',
                type: 'doc',
                docId: 'engage/software',
              },
              {
                label: 'Community',
                type: 'doc',
                docId: 'engage/community',
              },
              {
                label: 'Partnerships',
                type: 'doc',
                docId: 'engage/partners',
              },
              {
                label: 'Talent',
                type: 'doc',
                docId: 'engage/talent',
              }
            ]            
          },
          {
            type: 'dropdown',
            position: 'left',
            label: 'Resources',
            items: [
              {
                label: 'About \'Open\'',
                type: 'doc',
                docId: 'open/open',
              },
              {
                label: 'Open Science',
                type: 'doc',
                docId: 'open/open-science',
              },
              {
                label: 'Open Source Software',
                type: 'doc',
                docId: 'open/open-source-software',
              },
              {
                label: 'Open Data',
                type: 'doc',
                docId: 'open/open-data',
              }, 
              {
                label: 'Open Scholarship',
                type: 'doc',
                docId: 'open/open-scholarship',
              },
              {
                label: 'Playbooks',
                type: 'doc',
                docId: 'open/playbook',
              }
            ]
          },
          {
            type: 'doc',
            docId: 'oss-across-slu',
            position: 'left',
            label: 'OSS Across SLU',
          },
          {to: '/news', label: 'News', position: 'left'},
          {
            type: 'doc',
            docId: 'donate',
            label: 'Donate',
            position: 'right',
          },
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
            title: 'Open Source with SLU',
            items: [
              {
                label: 'People',
                to: '/people/current',
              },
              {
                label: 'Programs',
                to: '/programs/',
              },
              {
                label: 'Portfolio',
                to: '/portfolio',
              },
              {
                label: 'Open Resources',
                to: '/open/open',
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
                label: 'Request software development',
                to: '/engage/software',
              },
              {
                label: 'Join our community of developers',
                to: '/engage/community',
              },
              {
                label: 'Partner with us',
                to: '/engage/partners',
              },
              {
                label: 'Discover emerging talent',
                to: '/engage/talent',
              },
              {
                label: 'Make a gift',
                to: '/docs/donate',
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
                label: 'School of Science & Engineering',
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
