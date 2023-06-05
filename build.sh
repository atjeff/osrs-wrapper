#!/usr/bin/env bash

set -e

echo "Verifying the current branch is 'master'"
BRANCH=$(git symbolic-ref --short HEAD)
if [[ "$BRANCH" != "master" ]];
then
  echo "Not on 'master' branch."
  exit 1
fi

echo "Verifying the current branch is clean"
CHANGES=$(git status --porcelain)
if [[ "$CHANGES" != "" ]];
then
  echo "Unclean working tree. Commit or stash changes first."
  exit 1
fi

echo "Running tests"
npm run lint && npm run test

echo "Cleaning up dist"
rm -rf dist/
mkdir dist/

echo "Compiling TypeScript"
npm run build

echo "Copying meta files"
cp package.json dist/
cp README.md dist/

echo "Remove ts incremental build file"
rm dist/tsconfig.tsbuildinfo