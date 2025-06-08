# syntax=docker/dockerfile:1.4

ARG BASE_IMAGE=node:24
FROM ${BASE_IMAGE} AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --force

# --- Development/Debug Stage ---
FROM base AS dev
ENV NODE_ENV=development
COPY . .
RUN npm run generate
RUN npm run build:all
RUN npm install -D ts-node-dev
EXPOSE 3000
CMD ["npx", "ts-node-dev", "--respawn", "--transpile-only", "--ignore-watch", "node_modules", "src/main.ts"]

# --- Test/Staging Stage ---
FROM base AS test
ENV NODE_ENV=test
COPY . .
RUN npm run generate
RUN npm run build:all
EXPOSE 3000
CMD ["node", "dist/main.js"]

# --- Production Stage ---
FROM base AS prod
ENV NODE_ENV=production
COPY . .
RUN npm run generate
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]