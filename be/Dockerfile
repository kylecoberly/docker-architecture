FROM node:12.13.0
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 80
CMD ["npm", "start"]
