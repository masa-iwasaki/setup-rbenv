***This repo is still EXPERIMENTAL!***

# setup-rbenv

Set up Ruby by [rbenv](https://github.com/rbenv/rbenv) than using tool-cache provided by GitHub to catch up the latest versions of Ruby.

## Publish to a distribution branch

Actions are run from GitHub repos.  We will create a releases branch and only checkin production modules (core in this case). 

Comment out node_modules in .gitignore and create a releases/v1 branch
```bash
# comment out in distribution branches
# node_modules/
```

```bash
$ git checkout -b releases/v1
$ git commit -a -m "prod dependencies"
```

```bash
$ npm prune --production
$ git add node_modules
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Your action is now published! :rocket: 

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)