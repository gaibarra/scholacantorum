#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/scholacantorum"
SERVICE_NAME="scholacantorum"

cd "$APP_DIR"

git fetch --all --prune
git reset --hard origin/main

npm ci
npm run build

sudo systemctl restart "$SERVICE_NAME"
sudo systemctl status "$SERVICE_NAME" --no-pager -l
