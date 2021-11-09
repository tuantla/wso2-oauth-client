FROM node:10
ENV PORT 3000
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY bin bin
COPY routes routes
COPY app.js app.js
EXPOSE 3000
CMD [ "node", "--max-http-header-size","48000", "./bin/www" ]