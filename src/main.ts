import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    let options: installer.RbenvOptions = {
      rbenvRoot: "/home/runner",
      rbenvRootOwner: "runner"
    }

    let rbenvRoot = core.getInput('rbenv_root');
    let rbenvRootOwner = core.getInput('rbenv_root_owner');

    if (!!rbenvRoot) {
      options.rbenvRoot = rbenvRoot;
    }

    if (!!rbenvRootOwner) {
      options.rbenvRootOwner = rbenvRootOwner;
    }

    await installer.intallRbenv(options);
    await installer.installRubyBuild(options);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
