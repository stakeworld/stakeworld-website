# Stakeworld.io website source

This website is build using [Docusaurus 3](https://docusaurus.io/)

### Installation guide

#### Install nvm & yarn
* `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
* `nvm install --lts`
* `npm install -g yarn`


#### Install git
* `apt install git`

#### Clone
* `git clone git@github.com:stakeworld/stakeworld-website.git`
* Get up to date `git pull origin master`

#### Update packages
* `yarn`

#### Scripts
* `scripts/serve.sh` to serve a development copy
* `scripts/build.sh` to build a local copy
* `scripts/deploy.sh` to deploy to gh-pages. The website files are in branch master and are deployed to branch gh-pages, which is hosted on github. See [github deployment](https://docusaurus.io/docs/next/deployment#deploying-to-github-pages)
* You can try the website directly on [stackblitz](https://stackblitz.com/github/stakeworld/stakeworld-website/tree/master/?file=README.md)
