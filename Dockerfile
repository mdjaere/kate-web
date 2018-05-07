FROM nginx:alpine
RUN yarn
RUN yarn run build
COPY default.conf /etc/nginx/conf.d/default.conf
ADD dist/* /usr/share/nginx/html/
