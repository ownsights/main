FROM node:14-alpine

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

EXPOSE 3060

CMD yarn start
