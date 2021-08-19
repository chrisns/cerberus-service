FROM nginx:1.21.1 as selfsignedcerts
WORKDIR /certs
RUN openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout /certs/tls.key -out /certs/tls.crt -subj "/C=UK/ST=example/L=example/O=example/CN=www.example.com"

FROM node:16.7.0-alpine as builder

WORKDIR /src

COPY package*.json ./
RUN npm install
COPY . /src/

RUN FORM_API_URL=foo \
  REFDATA_API_URL=bar \
  npm run build

FROM nginx:1.21.1

COPY --from=builder --chown=101 /src/dist/ /usr/share/nginx/html
COPY --from=selfsignedcerts --chown=101 /certs /certs/

COPY /nginx/nginx.conf /etc/nginx/nginx.conf

COPY --chown=101 --chmod=700 /nginx/run.sh /docker-entrypoint.d/01-hack-env-vars-to-js.sh

RUN chown nginx -R /etc/nginx

USER 101

EXPOSE 8080
EXPOSE 10443

