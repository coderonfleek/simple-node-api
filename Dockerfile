FROM arm64v8/node:18.14-buster-slim

RUN apt-get update  && apt-get upgrade -y


WORKDIR /SIMPLE-NODE-API

COPY ./package.json ./package.json
RUN npm install

COPY ./routes.js routes.js 
COPY ./server.js server.js
COPY ./todos.js todos.js
COPY ./cron.js cron.js

EXPOSE 80
ENTRYPOINT [ "node", "cron" ]
