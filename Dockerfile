FROM node:current-slim

RUN apt-get update -y && apt-get upgrade -y


WORKDIR /SIMPLE-NODE-API

COPY ./package.json ./package.json
RUN npm install

COPY ./routes.js routes.js 
COPY ./server.js server.js
COPY ./todos.js todos.js

EXPOSE 1337
ENTRYPOINT [ "node", "server" ]
