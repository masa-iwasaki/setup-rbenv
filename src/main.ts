import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    let options: installer.RbenvOptions = {
      rbenv_root: "/home/runner",
      rbenv_root_owner: "runner"
    }

    options.rbenv_root = core.getInput('rbenv_root');
    options.rbenv_root_owner = core.getInput('rbenv_root_owner');

    await installer.install_rbenv(options);
    await installer.install_ruby_build(options);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
