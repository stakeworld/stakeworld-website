// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'Stakeworld.io',
  tagline: 'Kusama and Polkadot validators, collators and public RPC',
  url: 'https://www.stakeworld.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: 'false',

  organizationName: 'stakeworld',
  projectName: 'stakeworld-website',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

    plugins:    [
                  [
                    '@docusaurus/plugin-client-redirects',
                    {
                      fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
                      redirects: [
                        {
                          from: '/rpc',
                          to: '/docs/rpc',
                        },
                        {
                          from: '/snapshot',
                          to: '/docs/snapshot',
                        },
                      ],
                    },
                  ],
                ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
	docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/stakeworld/website/edit/master/',
        },
        blog: {
          showReadingTime: true,
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
	 content: `⭐️ If you like Stakeworld, nominate it on <a target="_blank" rel="noopener noreferrer" href="https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fksm-rpc.stakeworld.io&filter=stakeworld">Kusama</a> or <a target="_blank" rel="noopener noreferrer" href="https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fdot-rpc.stakeworld.io&filter=stakeworld">Polkadot</a> ⭐️`,
	},
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        title: 'Stakeworld',
        style: 'dark',
	logo: {
          alt: 'Stakeworld',
          src: 'img/sw.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'dbsize',
            position: 'left',
            label: 'Database sizes',
          },
          {
            type: 'doc',
            docId: 'validate',
            position: 'left',
            label: 'Validators',
          },
          {
            type: 'doc',
            docId: 'snapshot',
            position: 'left',
            label: 'Snapshots',
          },
          {
            type: 'doc',
            docId: 'rpc',
            position: 'left',
            label: 'Public RPC',
          },
          {
            label: 'Nominate on Polkadot',
            position: 'right',
	    href: 'https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fdot-rpc.stakeworld.io&filter=stakeworld',
          },
          {
            label: 'Nominate on Kusama',
            position: 'right',
	    href: 'https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fksm-rpc.stakeworld.io&filter=stakeworld',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Services',
            items: [
              {
                label: 'Snapshots',
                to: '/docs/snapshot',
              },
              {
                label: 'RPC',
                to: '/docs/rpc',
              },
              {
                label: 'Database sizes',
                to: '/docs/dbsize',
              },
            ],
          },
          {
            title: 'Reference',
            items: [
              {
                label: 'Polkadot wiki',
                href: 'https://wiki.polkadot.network/',
              },
              {
                label: 'Polkadot.js',
                href: 'https://polkadot.js.org/apps/?rpc=wss://dot-rpc.stakeworld.io',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'info@stakeworld.io',
                href: 'mailto:info@stakeworld.io',
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
        copyright: `Main identities:<br> Kusama: Et9M3rrA7H2kHQEGRXHxufcp9HTEmFirMWtKHvjoJ85r1C9<br>Polkadot: 13Jpq4n3PXXaSAbJTMmFD78mXAzs8PzgUUQd5ve8saw7HQS5<br><br>Copyright © ${new Date().getFullYear()}`,
      },
    }),
};

module.exports = config;
