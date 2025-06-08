#!/usr/bin/env bash
set -euo pipefail

# Project name for compose (change if you want to run multiple stacks)
COMPOSE_PROJECT_NAME=nestjs-pets
DOCKER_COMPOSE_FILES="-f docker/docker-compose.yml -f docker/docker-compose.debug.yml" 

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
echo "Building app image..."
$COMPOSE_BIN -p "$COMPOSE_PROJECT_NAME" $DOCKER_COMPOSE_FILES --env-file ../.env build

# Start up everything (detached mode)
echo "Starting up containers..."
$COMPOSE_BIN -p "$COMPOSE_PROJECT_NAME" $DOCKER_COMPOSE_FILES --env-file ../.env up -d

# Show status
$COMPOSE_BIN -p "$COMPOSE_PROJECT_NAME" $DOCKER_COMPOSE_FILES --env-file ../.env ps

echo "Done! Your stack is running. Use '$COMPOSE_BIN -p $COMPOSE_PROJECT_NAME logs -f' to view logs."
