FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g ember-cli

COPY . .

EXPOSE 4200

CMD ["ember", "serve"]
