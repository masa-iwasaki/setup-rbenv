import * as core from '@actions/core';
import * as installer from './installer';

async function run() {
  try {
    await installer.install_rbenv();

    await installer.install_ruby_build();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
