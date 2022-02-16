FROM node:17 AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM base AS dev

COPY nest-cli.json \
  tsconfig.* \
  ./
COPY ./src/ ./src/

RUN npm run build
RUN npm prune --production

RUN curl -sf https://gobinaries.com/tj/node-prune | sh
RUN node-prune

FROM node:17-alpine

COPY --from=base /app/package*.json ./
COPY --from=dev /app/dist ./dist/
COPY --from=base /app/node_modules ./node_modules

CMD ["node", "--trace-warnings", "dist/main.js"]
