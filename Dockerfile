FROM nginx:alpine
RUN npm ci
RUN npm run build
COPY default.conf /etc/nginx/conf.d/default.conf
ADD dist/* /usr/share/nginx/html/
