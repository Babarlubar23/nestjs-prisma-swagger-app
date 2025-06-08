#!/usr/bin/env bash
set -euo pipefail

# Change to project root directory
cd "$(dirname "$0")/.."

# Load .env.dev if it exists, else fallback to .env
if [ -f .env.dev ]; then
  export $(grep -v '^#' .env.dev | xargs)
elif [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Use APP_PORT from env, default to 3000 if not set
PORT="${APP_PORT:-3000}"

# Kill any process using the app port
if lsof -i :$PORT &>/dev/null; then
  PID=$(lsof -t -i :$PORT)
  echo "Killing process on port $PORT (PID: $PID)"
  kill $PID || true
fi

# Start the app in debug mode
npm run start:dev
