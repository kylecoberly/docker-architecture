FROM node:12.13.0
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
