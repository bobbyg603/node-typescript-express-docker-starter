FROM node:19-alpine as Builder

WORKDIR /tmp
COPY . .
RUN ls -la && npm ci --quiet && npm run build

FROM node:19-alpine

WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --production --silent && mv node_modules ../
COPY . .
COPY --from=builder /tmp/dist ./dist 
EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["node", "./dist/bin/www.js"]