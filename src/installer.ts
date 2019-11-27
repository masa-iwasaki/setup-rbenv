import * as exec from '@actions/exec';

export async function install_rbenv(options: RbenvOptions) {
  await exec.exec('sudo', ['git', 'clone', 'https://github.com/rbenv/rbenv.git', '/usr/local/rbenv']);
  // TODO: Add README that PATH should be set by users
  // await exec.exec('export', ['PATH="$HOME/.rbenv/bin:$PATH"']);
}

export interface RbenvOptions {
  rbenv_root: string;
  rbenv_root_owner: string;
};

export async function install_ruby_build(options: RbenvOptions) {


  // from https://github.com/rbenv/ruby-build/wiki
  const packages = [
    "libreadline6-dev",
    "zlib1g-dev",
    "libncurses5-dev",
    "libffi-dev",
    "libgdbm5",
    "libgdbm-dev"
  ];

  const rubyBuildInstallPath = `${options.rbenv_root}/plugins/ruby-build`;

  await exec.exec('sudo', ['apt-get', 'update']);
  await exec.exec('sudo', ['apt-get', 'install', '-y', ...packages]);

  await exec.exec('sudo', ['git', 'clone', 'https://github.com/rbenv/ruby-build.git', rubyBuildInstallPath]);

  await exec.exec('sudo', ['chown', '-R', options.rbenv_root_owner, options.rbenv_root])
};

