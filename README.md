# setup-rbenv

Set up Ruby by [rbenv](https://github.com/rbenv/rbenv), not using tool-cache provided by GitHub to catch up the latest versions of Ruby.

# Usage

```yaml
steps:
- uses: actions/checkout@master
- uses: masa-iwasaki/setup-rbenv@v1.0.0-beta
- name: Install Ruby
  run: |
    eval "$(rbenv init -)"
    rbenv install `cat .ruby-version` # or specify the version you want

- name: Run bundler
  run: |
    eval "$(rbenv init -)"
    bundle install --path vendor/bundle
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)