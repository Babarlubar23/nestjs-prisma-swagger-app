#!/usr/bin/env bash
set -euo pipefail

# Change to the project root directory
cd "$(dirname "$0")/.."

# Project name for compose (change if you want to run multiple stacks)
COMPOSE_PROJECT_NAME=nestjs-pets

# Accept target environment as first argument (default: dev)
TARGET_ENV="${1:-dev}"

# Compose file logic based on target env
if [[ "$TARGET_ENV" == "dev" ]]; then
  DOCKER_COMPOSE_FILES="-f docker/docker-compose.debug.yml"
  SERVICE_NAME="app-on-dev"
elif [[ "$TARGET_ENV" == "test" ]]; then
  DOCKER_COMPOSE_FILES="-f docker/docker-compose.debug.yml"
  SERVICE_NAME="app-on-test"
else
  DOCKER_COMPOSE_FILES="-f docker/docker-compose.yml -f docker/docker-compose.debug.yml"
  SERVICE_NAME="app"
fi

# Use Podman Compose if available, else fallback to Docker Compose
COMPOSE_BIN="docker-compose"
if command -v podman-compose &>/dev/null; then
  COMPOSE_BIN="podman-compose"
fi

# Clean up old containers, images, and networks for this project
# Remove Redis volume, but preserve Postgres volume
REDIS_VOLUME_NAME="${COMPOSE_PROJECT_NAME}_redis_data"
POSTGRES_VOLUME_NAME="${COMPOSE_PROJECT_NAME}_postgres_data"

# Stop and remove containers/networks (preserve all volumes)
echo "Stopping and removing previous containers, networks (volumes are preserved)..."
$COMPOSE_BIN -p "$COMPOSE_PROJECT_NAME" $DOCKER_COMPOSE_FILES --env-file ../.env down --remove-orphans

# Remove only the Redis volume if it exists
if docker volume ls -q | grep -q "^$REDIS_VOLUME_NAME$"; then
  echo "Removing Redis volume: $REDIS_VOLUME_NAME"
  docker volume rm "$REDIS_VOLUME_NAME"
fi

# Build the app image (ensures latest code is used)
echo "Building $SERVICE_NAME image..."
$COMPOSE_BIN -p "$COMPOSE_PROJECT_NAME" $DOCKER_COMPOSE_FILES --env-file ../.env build $SERVICE_NAME

# Start up the selected service and its dependencies (detached mode)
echo "Starting up $SERVICE_NAME and dependencies..."
$COMPOSE_BIN -p "$COMPOSE_PROJECT_NAME" $DOCKER_COMPOSE_FILES --env-file ../.env up -d $SERVICE_NAME

# Show status
$COMPOSE_BIN -p "$COMPOSE_PROJECT_NAME" $DOCKER_COMPOSE_FILES --env-file ../.env ps

echo "Done! $SERVICE_NAME is running. Use '$COMPOSE_BIN -p $COMPOSE_PROJECT_NAME logs -f $SERVICE_NAME' to view logs."
