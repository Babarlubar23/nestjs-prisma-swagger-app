#!/bin/bash
# Use this script to run Prisma commands with your local .env.local file
# Usage: ./prisma-local.sh prisma studio

export $(grep -v '^#' .env.local | xargs)

# Use npx to ensure the local Prisma CLI is used
npx "$@"
