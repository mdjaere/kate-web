FROM node:9-alpine

ADD src /app/src
ADD .babelrc \
    package.json \
    package-lock.json \
    webpack.config.js \
    server.js \
    /app/

WORKDIR /app

RUN npm ci
RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm", "run", "serve"]
