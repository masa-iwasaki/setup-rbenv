import * as exec from '@actions/exec';
import * as fs from 'fs'

export async function intallRbenv(options: RbenvOptions) {
  await exec.exec('sudo', ['git', 'clone', '--depth', '1', 'https://github.com/rbenv/rbenv.git', options.rbenvRoot]);
}

export interface RbenvOptions {
  rbenvRoot: string;
  rbenvRootOwner: string;
};

export async function installRubyBuild(options: RbenvOptions) {
  // from https://github.com/rbenv/ruby-build/wiki
  const packages = [
    "libreadline6-dev",
    "zlib1g-dev",
    "libncurses5-dev",
    "libffi-dev",
    "libgdbm-dev"
  ];

  const osRelease = fs.readFileSync("/etc/os-release", {encoding: "utf-8"});
  const matched = osRelease.match(/VERSION_ID="([0-9.]+)"/);
  const ubuntuVersion = matched ? matched[1] : "0";

  if (parseFloat(ubuntuVersion) >= 18.04 ){
    // Ubuntu 18.04+ (bionic)
    packages.push("libgdbm5");
  } else {
    // Ubuntu 16.04 (xenial)
    packages.push("libgdbm3");
  }

  const rubyBuildInstallPath = `${options.rbenvRoot}/plugins/ruby-build`;

  await exec.exec('sudo', ['apt-get', 'update']);
  await exec.exec('sudo', ['apt-get', 'install', '-y', ...packages]);

  await exec.exec('sudo', ['git', 'clone', '--depth', '1', 'https://github.com/rbenv/ruby-build.git', rubyBuildInstallPath]);

  await exec.exec('sudo', ['chown', '-R', options.rbenvRootOwner, options.rbenvRoot])
};
