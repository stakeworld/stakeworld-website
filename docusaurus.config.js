// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: [ 
    {	  
	src: 'https://gn3bcsr3tsg9.statuspage.io/embed/script.js',
	async: true,
    },
  ],
  title: 'Stakeworld.io',
  tagline: 'Kusama and Polkadot Validator Services',
  url: 'https://www.stakeworld.io',
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

    plugins:    [
                  [
                    require.resolve('@cmfcmf/docusaurus-search-local'), {indexBlog: false},
                  ],
                  [
                    '@docusaurus/plugin-client-redirects',
                    {
                      fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
                      redirects: [
                        {
                          from: '/docs/links',
                          to: '/docs/1kv',
                        },
                        {
                          from: '/1kv',
                          to: '/docs/1kv',
                        },
                        {
                          from: '/rpc',
                          to: '/docs/rpc',
                        },
                        {
                          from: '/snapshot',
                          to: '/docs/snapshot',
                        },
                        {
                          from: '/pool',
                          to: '/docs/pool',
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
            docId: 'snapshot',
            position: 'left',
            label: 'Snapshots',
          },
          {
            type: 'doc',
            docId: 'bootnode',
            position: 'left',
            label: 'Bootnodes',
          },
          {
            type: 'doc',
            docId: 'rpc',
            position: 'left',
            label: 'Public RPC',
          },
          {
            type: 'doc',
            docId: 'dbsize',
            position: 'left',
            label: 'Database sizes',
          },
          {
            type: 'dropdown',
            docId: 'validate',
            position: 'left',
            label: 'Manuals',
	    items: [
              {
                type: 'doc',
	        docId: 'validate/validate',
                label: 'Setup a validator node',
              },
              {
                type: 'doc',
                docId: 'validate/monitor',
                label: 'Setup node Monitoring',
              },
              {
                type: 'doc',
                docId: 'bootnode',
                label: 'Setup a bootnode',
              },
              {
                type: 'doc',
                docId: 'tools',
                label: 'Generic linux tips',
              },
              {
                type: 'doc',
                docId: 'validate/1kv',
                label: '1000 validator program resources',
              },
	    ],
          },
          {
            type: 'dropdown',
            docId: 'nominate',
            position: 'right',
            label: 'Nominate stakeworld',
	    items: [
              {
		type: 'doc',
		docId: 'nominate',
                label: 'Nominate',
              },
              {
	    	href: 'https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fdot-rpc.stakeworld.io&filter=stakeworld',
                className: 'button button--group',
                label: 'on Polkadot',
              },
              {
	        href: 'https://polkadot.js.org/apps/#/staking/targets?rpc=wss%3A%2F%2Fksm-rpc.stakeworld.io&filter=stakeworld',
                className: 'button button--group',
                label: 'on Kusama',
              },
              {
	    	type: 'doc',
		docId: 'pool',
                label: 'Pool',
              },
	    ],
          },
          {
	    href: 'https://stakeworld.statuspage.io/',
            position: 'right',
            label: 'Status',
          },
//	 {to: '/blog', label: 'Blog', position: 'left'},
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
            title: 'Stakeworld',
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
                label: 'Validate',
                to: '/docs/validate',
              },
              {
                label: 'Nominate',
                to: '/docs/nominate',
              },
              {
                label: 'Links',
                to: '/docs/links',
              },
              {
                label: 'Linux tips',
                to: '/docs/tools',
              },
            ],
          },
          {
            title: 'Kusama/Polkadot',
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
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
