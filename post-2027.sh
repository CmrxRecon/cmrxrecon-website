#!/bin/bash
ROOT_DIR=$(dirname $(realpath $0))
PAGE_DIR=$(realpath modules/cmrxrecon.github.io)

cd $PAGE_DIR
git checkout main && git reset --hard && git pull
rm -rf 2027

cd $ROOT_DIR
npm run build-2027
rm -rf pages/2027/.vitepress/dist/assets/*lean.js
cp -r pages/2027/.vitepress/dist/ $PAGE_DIR/2027

cd $PAGE_DIR
git add .
git commit -m "update 2027 post"
git push

cd $ROOT_DIR
git add modules/cmrxrecon.github.io
