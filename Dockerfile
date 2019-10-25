FROM node:10
ENV PORT 8080
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY bin bin
COPY routes routes
COPY app.js app.js
EXPOSE 8080
CMD [ "node", "./bin/www" ]