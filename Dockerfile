FROM node:20-alpine

WORKDIR /home/node/app
RUN mkdir -p /home/node/app && chown node:node /home/node/app
USER node

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY package.json package-lock.json ./


RUN npm ci --omit=dev

COPY .next ./.next
COPY next.config.js ./

EXPOSE 3000

CMD ["npm", "start"]