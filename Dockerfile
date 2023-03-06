FROM node:16

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

COPY . .

RUN npm run build

EXPOSE 8080

RUN npm start