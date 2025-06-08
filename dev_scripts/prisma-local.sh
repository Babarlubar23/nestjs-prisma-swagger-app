#!/bin/bash
# Use this script to run Prisma commands with your local .env.dev file
# Usage: ./prisma-local.sh prisma studio

cd "$(dirname "$0")/.."

export $(grep -v '^#' .env.dev | xargs)

# Use npx to ensure the local Prisma CLI is used
npx "$@"
