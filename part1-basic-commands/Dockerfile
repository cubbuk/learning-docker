FROM node:latest

WORKDIR /app

COPY . .

ENV PORT=7001

RUN npm install

EXPOSE $PORT

ENTRYPOINT ["node", "app.js"]
