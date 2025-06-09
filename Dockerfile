# syntax=docker/dockerfile:1.4

ARG BASE_IMAGE=node:24

# --- Base Stage (prod deps only) ---
FROM ${BASE_IMAGE} AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev --force

# --- Development/Debug Stage (all deps) ---
FROM ${BASE_IMAGE} AS dev
WORKDIR /usr/src/app
ENV NODE_ENV=development
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run generate
RUN npm run build:all
EXPOSE 3000
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "--ignore-watch", "node_modules", "src/main.ts"]

# --- Test/Staging Stage (prod deps only) ---
FROM base AS test
ENV NODE_ENV=test
COPY . .
RUN npm run generate
RUN npm run build:all
EXPOSE 3000
CMD ["node", "dist/main.js"]

# --- Production Stage (prod deps only) ---
FROM base AS prod
ENV NODE_ENV=production
COPY . .
RUN npm run generate
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]