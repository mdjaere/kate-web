FROM nginx:alpine
COPY default.conf /etc/nginx/conf.d/default.conf
ADD dist/* /usr/share/nginx/html/
