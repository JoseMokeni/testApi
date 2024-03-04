FROM node:slim

WORKDIR /

COPY . .

RUN npm i

ENV PORT=5000

ENV environment=dev


CMD [ "npm", "run", "server" ]

EXPOSE $PORT