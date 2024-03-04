FROM nodejs:slim

WORKDIR /

COPY . .

RUN npm i

ENV PORT=5000

ENV environment=dev

EXPOSE $PORT

CMD [ "npm", "run", "server" ]
