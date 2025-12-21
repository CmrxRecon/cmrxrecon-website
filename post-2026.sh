#!/bin/bash
ROOT_DIR=$(dirname $(realpath $0))
PAGE_DIR=$(realpath modules/cmrxrecon.github.io)

cd $PAGE_DIR
git checkout main && git reset --hard && git pull
rm -rf 2026

cd $ROOT_DIR
npm run build-2026
rm -rf pages/2026/.vitepress/dist/assets/*lean.js
cp -r pages/2026/.vitepress/dist/ $PAGE_DIR/2026

cd $PAGE_DIR
git add .
git commit -m "update 2026 post"
git push

cd $ROOT_DIR
git add modules/cmrxrecon.github.io
