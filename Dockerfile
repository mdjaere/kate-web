FROM node:9
RUN npm install
RUN npm run build
RUN echo "Reached this step"
