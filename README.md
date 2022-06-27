# STAKEWORLD.nl website source

This website is build using [Docusaurus 2](https://docusaurus.io/)

### Installation guide

* [Docusaurus](https://docusaurus.io/docs/next/installation) installation guide
* [NVM install](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) option 3

Install node.js via nvm (node version manager, choose latest stable)

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm list-remote
nvm install v16.15.1
```

Install yarn

```
npm install yarn
```

Install git

```
apt install git
```

### Fresh Install of Docusaurus

```
npx create-docusaurus@latest my-website classic
```

### Development

* You can test your site by `npm run start`
* You can build a static version by `npm run build`

### Deploy to github
The website files are in branch master and are deployed to branch gh-pages, which is hosted on github. See [github deploymant](https://docusaurus.io/docs/next/deployment#deploying-to-github-pages)

To deploy:
```
GIT_USER=stakeworld USE_SSH=true CURRENT_BRANCH=master DEPLOYMENT_BRANCH=gh-pages npm run deploy
```

### Using GIT
Here you can find some basics:
* [netlify](https://www.netlifycms.org/docs/docusaurus/)
* [bitbucket](https://www.atlassian.com/git/tutorials/syncing/git-pull)
* [git basics](https://daily-dev-tips.com/posts/git-basics-your-first-commit-to-github/)
* [git basics](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)

### Initialize repo
* To initialize your repo: `git init`, 
* To add all files: `git add .`
* To make a commit: `git commit -am "i\nitial commit"`
* To see the status: `git status`
* To add the remote origin: `git remote add origin git@github.com:stakeworld/website.git`, check with 
* To push commit: `git push origin master`

### Make changes
* Add changes: `git add .`
* Commit changes: `git commit -am "Changed readme, added test file"`
* Push the changes: `git push origin master`

### Update Local repository
* Get changes from master: `git pull` (combination of `git fetch` and `git merge`

### Clone the project
* Clone the project `git clone git@github.com:stakeworld/website.git`
* Get up to date `git pull origin master`
