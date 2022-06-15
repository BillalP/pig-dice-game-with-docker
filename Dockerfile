FROM node



LABEL environment="development"

COPY . .

RUN npm install

ENTRYPOINT npm run start