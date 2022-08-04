FROM node:14-alpine as install

WORKDIR /app

COPY . .

RUN yarn install

RUN cd server && yarn install

EXPOSE 3060

CMD cd server && yarn start
