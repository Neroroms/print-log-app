FROM node:12.13.0-slim AS build

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build
RUN mv node_modules/ dist/node_modules

FROM node:12.13.0-slim AS deploy

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist/ .

EXPOSE 80

ENTRYPOINT node index.js