// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'STAKEWORLD',
  tagline: 'Kusama and Polkadot Validator Service',
  url: 'https://www.stakeworld.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stakeworld', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  deploymentBranch: 'gh-pages',
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
	gtag: {
		trackingID: 'G-3BXEZ2R6SV'
	},
	docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stakeworld/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/stakeworld/website/edit/master/',
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
       announcementBar: {
         id: 'announcementBar-1', // Increment on change
         backgroundColor: '#f5f7bc',
	 content: `⭐️ If you like STAKEWORLD, nominate it on <a target="_blank" rel="noopener noreferrer" href="https://polkadot.js.org/apps/#/staking/targets?filter=stakeworld">Polkadot.js</a>`,
	},
      navbar: {
        title: 'STAKEWORLD',
        logo: {
          alt: 'STAKEWORLD',
          src: 'img/sw.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'validate/intro',
            position: 'left',
            label: 'Validate',
          },
          {
            type: 'doc',
            docId: 'nominate/intro',
            position: 'left',
            label: 'Nominate',
          },
	 {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/stakeworld',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'STAKEWORLD',
            items: [
              {
                label: 'Validate',
                to: '/docs/validate',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Polkachu Thousand Validator',
                href: 'https://polkachu.com/kusama/thousand_validators/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/stakeworld',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} STAKEWORLD`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
