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
  trailingSlash: 'false',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stakeworld', // Usually your GitHub org/user name.
  projectName: 'stakeworld-website', // Usually your repo name.
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
		trackingID: 'G-Y6WZJWKT31'
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
         id: 'announcementBar', 
         backgroundColor: '#f5f7bc',
	 content: `⭐️ If you like STAKEWORLD, nominate it on <a target="_blank" rel="noopener noreferrer" href="https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io&filter=stakeworld">Kusama</a> or <a target="_blank" rel="noopener noreferrer" href="https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Frpc.polkadot.io&filter=stakeworld">Polkadot</a> ⭐️`,
	},
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'STAKEWORLD',
        style: 'dark',
	logo: {
          alt: 'STAKEWORLD',
          src: 'img/sw.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'validate/validate',
            position: 'right',
            label: 'Information',
          },
          {
            type: 'doc',
            docId: 'nominate',
            position: 'left',
            label: 'Nominate',
          },
          {
            type: 'doc',
            docId: 'snapshot',
            position: 'right',
            label: 'Snapshots',
          },
          {
	    href: 'https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Frpc.polkadot.io&filter=stakeworld',
            position: 'left',
            className: 'button button--group',
            label: 'on Polkadot',
          },
          {
	    href: 'https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io&filter=stakeworld',
            position: 'left',
            className: 'button button--group',
            label: 'on Kusama',
          },
          {
            type: 'doc',
            docId: 'pool',
            position: 'left',
            label: 'Pool',
          },
//	 {to: '/blog', label: 'Blog', position: 'left'},
//          {
//            href: 'https://github.com/stakeworld',
//            label: 'GitHub',
//            position: 'right',
//          },
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
              {
                label: 'Nominate',
                to: '/docs/nominate',
              },
              {
                label: 'Snapshots',
                to: '/docs/snapshot',
              },
              {
                label: 'Pool',
                to: '/pool',
              },
            ],
          },
          {
            title: 'Kusama/Polkadot',
            items: [
              {
                label: 'Thousand Validator resources',
                href: 'https://stakeworld.nl/docs/1kv',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'info@stakeworld.nl',
                href: 'mailto:info@stakeworld.nl',
              },
              {
		label: 'github.com/stakeworld',
                href: 'https://github.com/stakeworld',
              },
              {
                label: '@stakeworld.matrix.org',
                href: 'https://app.element.io/#/user%2F%40stakeworld%3Amatrix.org',
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
