FROM node:10 as node
WORKDIR /pon la que gustes
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]