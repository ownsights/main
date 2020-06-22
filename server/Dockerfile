FROM node:14-alpine as builder

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN yarn install

RUN yarn build

FROM node:14-alpine as runner
WORKDIR /app

COPY . .

RUN yarn install --production

CMD yarn start
