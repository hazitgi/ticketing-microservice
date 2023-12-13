FROM node:20.10.0-alpine

WORKDIR /app
COPY package.json ./
RUN npm install -g npm@10.2.5
RUN npm install
COPY ./ ./
RUN npm install -g ts-node typescript '@types/node'

CMD [ "npm", "start" ]