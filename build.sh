#!/usr/bin/env bash

set -e

echo "Verifying the current branch is 'master'"
BRANCH=$(git symbolic-ref --short HEAD)
if [[ "$BRANCH" != "master" ]];
then
  echo "Not on 'master' branch."
  exit 1
fi

echo "Running tests"
bun run typecheck && bun run lint && bun run test

echo "Cleaning up dist"
rm -rf dist/
mkdir dist/

echo "Compiling TypeScript"
bun run build

echo "Copying meta files"
cp package.json dist/
cp README.md dist/