FROM node:9

ADD src /app/src
ADD .babelrc /app
ADD package.json /app
ADD webpack.config.js /app

WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 8080

ENTRYPOINT ["npm", "run", "serves"]
