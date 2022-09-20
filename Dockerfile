FROM node:lts-alpine as Builder

WORKDIR /tmp
COPY . .
RUN ls -la && npm ci --quiet && npm run build

FROM node:lts-alpine

WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --production --silent && mv node_modules ../
COPY . .
COPY --from=builder /tmp/dist ./dist 
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "./dist/bin/www.js"]