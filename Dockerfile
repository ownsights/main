FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

COPY ./server ./server
COPY package.json .
COPY yarn.lock .
COPY jest.config.json .


RUN yarn install

WORKDIR /app/server

RUN yarn install

WORKDIR /app

CMD yarn concurrently "cd server && yarn run parcel" "nodemon server/index.js"
