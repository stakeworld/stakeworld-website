# STAKEWORLD.nl website source

This website is build using [Docusaurus 2](https://docusaurus.io/)

### Installation guide

#### Install nvm & yarn
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install --lts
npm install -g yarn
```

#### Install git
```
apt install git
```

#### Clone
* `git clone git@github.com:stakeworld/stakeworld-website.git`
* Get up to date `git pull origin master`

#### Update packages
* `yarn`

#### Scripts
* scripts/serve.sh to serve a development copy
* scripts/build.sh
* scripts/deploy.sh The website files are in branch master and are deployed to branch gh-pages, which is hosted on github. See [github deploymant](https://docusaurus.io/docs/next/deployment#deploying-to-github-pages)
* You can try it on [stackblitz](https://stackblitz.com/github/stakeworld/stakeworld-website/tree/master/?file=README.md)

### Some git tips
* To initialize your repo: `git init`, 
* To add all files: `git add .`
* To make a commit: `git commit -am "i\nitial commit"`
* To see the status: `git status`
* To push commit: `git push origin master`

