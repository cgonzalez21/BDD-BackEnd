FROM node:10 as node
WORKDIR /usr/src/app/back-end
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]