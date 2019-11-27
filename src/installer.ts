import * as exec from '@actions/exec';

export async function install_rbenv() {
  await exec.exec('git', ['clone', 'https://github.com/rbenv/rbenv.git', '~/.rbenv']);
  // TODO: Add README that PATH should be set by users
  // await exec.exec('export', ['PATH="$HOME/.rbenv/bin:$PATH"']);
}

export async function install_ruby_build() {

  // from https://github.com/rbenv/ruby-build/wiki
  const packages = [
    "libreadline6-dev",
    "zlib1g-dev",
    "libncurses5-dev",
    "libffi-dev",
    "libgdbm5",
    "libgdbm-dev"
  ];

  await exec.exec('sudo', ['apt-get', 'update']);
  await exec.exec('sudo', ['apt-get', 'install', '-y', ...packages]);

  await exec.exec('git', ['clone', 'https://github.com/rbenv/rbenv.git', '~/.rbenv/plugins/ruby-build']);
};

