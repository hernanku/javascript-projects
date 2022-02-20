FROM node:13.12.0-alpine

WORKDIR /app

RUN apk add --no-cache libstdc++ \
    curl \
    bash

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "development"]
