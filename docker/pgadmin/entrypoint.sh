#!/bin/sh
set -eu
echo "${DB_HOST:-db}:${DB_PORT:-5432}:${DB_NAME:-app}:${DB_USER:-dev}:${DB_PASSWORD:-dev}" > /pgpassfile
chmod 600 /pgpassfile
# 公式のエントリポイントを呼び出す（イメージ内の既定）
exec /entrypoint.sh "$@"