FROM node

LABEL environment="development"

EXPOSE 3000

COPY . .

RUN npm install

ENTRYPOINT npm run start