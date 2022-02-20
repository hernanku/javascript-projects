FROM node:13.12.0-alpine3.11
WORKDIR /app
COPY package.json /app
RUN npm install && npm cache clean --force
COPY . /app
CMD npm run development
EXPOSE 3000
