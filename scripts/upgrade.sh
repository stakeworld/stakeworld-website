#!/bin/bash
yarn upgrade @docusaurus/core@latest @docusaurus/plugin-client-redirects@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/types@latest
yarn upgrade
yarn clear
yarn build
