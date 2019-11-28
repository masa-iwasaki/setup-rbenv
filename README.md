# setup-rbenv

Set up Ruby by [rbenv](https://github.com/rbenv/rbenv), not using tool-cache provided by GitHub to catch up the latest versions of Ruby.

# Usage

```yaml
steps:
- uses: actions/checkout@master
- uses: masa-iwasaki/setup-rbenv@v1.0.0-beta
- run: |
    eval "$(rbenv init -)"
    rbenv install `cat .ruby-version` # or specify the version you want
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)