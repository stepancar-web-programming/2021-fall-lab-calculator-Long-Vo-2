FROM node:16 AS react-build
WORKDIR /frontend
COPY ./frontend ./
RUN yarn
RUN yarn build

FROM nginx:alpine AS react-docker
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /frontend/build /usr/share/nginx/html
EXPOSE 9333
CMD ["nginx", "-g", "daemon off;"]

FROM node:16 AS node-build
WORKDIR /backend
COPY ./backend ./
EXPOSE 80
RUN yarn
CMD [ "node", "server.js" ]
