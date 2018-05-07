FROM node:9
RUN npm ci
RUN npm run build
RUN echo "Reached this step"
