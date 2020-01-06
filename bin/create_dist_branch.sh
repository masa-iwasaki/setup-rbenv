#!/usr/bin/env bash
#
# Use this script when you want to create another distribution branch.
# Because distribution branches need extra work to include node_modules.
#
# For more details, see the link below.
# https://github.com/actions/typescript-action#publish-to-a-distribution-branch
#

function usage() {
  echo "Usage: $0 target_branch"
}

set -eu

if [ $# -ne 1 ]; then
  usage
  exit 1
fi

TARGET=$1

# Use --format option to remove asterisk from the list of branches
if [ ! -z `git branch --format '%(refname:short)' | grep '${TARGET}'` ]; then
  echo "Branch '${TARGET}' exists"
  exit 1
fi

git checkout -b ${TARGET}
sed -i s/^node_modules/\#node_modules/ .gitignore
npm prune --production
git add node_modules
git commit -a -m "Include node_modules for distribution"
