# setup-rbenv

Set up Ruby by [rbenv](https://github.com/rbenv/rbenv), not using tool-cache provided by GitHub to catch up the latest versions of Ruby.

# Usage

```yaml
steps:
- uses: actions/checkout@master
- uses: masa-iwasaki/setup-rbenv@preview
- name: Install Ruby
  run: |
    eval "$(rbenv init -)"
    rbenv install -s `cat .ruby-version` # or specify the version you want

- name: Run bundler
  run: |
    eval "$(rbenv init -)"
    bundle install --path vendor/bundle
```

## Cache

If you want to cache RBENV_ROOT by [actions/cache](https://github.com/actions/cache), you can use `$RBENV_ROOT` as path for the cache.

```yaml
steps:
- uses: actions/checkout@master
- uses: masa-iwasaki/setup-rbenv@preview

- name: Cache RBENV_ROOT
  uses: actions/cache@preview
  id: cache_rbenv
  with:
    path: $RBENV_ROOT
    key: ${{ runner.os }}-rbenv

- name: Install Ruby
  run: |
    eval "$(rbenv init -)"
    rbenv install -s `cat .ruby-version`
```

You don't need to check cache hit because `-s` option for `rbenv install` does the job.

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)