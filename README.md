# Stakeworld.io website
This website is build using [Docusaurus 3](https://docusaurus.io/) and [deployed on github](https://docusaurus.io/docs/next/deployment#deploying-to-github-pages). You can try [stackblitz](https://stackblitz.com/github/stakeworld/stakeworld-website/tree/master/?file=README.md) for a test run.

![deploy](https://github.com/stakeworld/stakeworld-website/actions/workflows/deploy.yml/badge.svg)

```bash
# Install nvm & yarn
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install --lts
npm install -g yarn
# Clone the repo
cd /opt/
git clone git@github.com:stakeworld/stakeworld-website.git`
# Update packages
cd stakeworld-website
yarn
# Serve a development deployment
yarn start
```

```bash
./scripts/serve.sh # to serve a development copy
./scripts/build.sh # to build a local copy
./scripts/deploy.sh # to deploy to gh-pages
```
