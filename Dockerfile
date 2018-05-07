FROM node:9
ADD * /app/

WORKDIR /app

RUN npm install
RUN npm run build
RUN echo "Reached this step"
