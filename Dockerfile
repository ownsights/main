FROM node:14-alpine

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN yarn install

RUN cd server

CMD yarn nodemon server/index.js
