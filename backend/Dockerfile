FROM node:22-alpine AS builder
WORKDIR /app
COPY ./backend/package*.json ./backend/tsconfig.json ./
RUN npm ci
COPY ./backend/ ./
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY ./backend/package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/build/ ./build/
ENTRYPOINT ["node", "build/index.js"]