FROM node:13-alpine as install

RUN mkdir -p /app
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

CMD yarn install --production

COPY . .

FROM node:13-alpine as run

WORKDIR /app

EXPOSE 3060
CMD yarn start

