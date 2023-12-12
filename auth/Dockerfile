FROM node:20.10.0-alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm install -g ts-node typescript '@types/node'

CMD [ "npm", "start" ]