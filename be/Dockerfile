FROM node:latest
WORKDIR /app
COPY . /app
RUN npm i
ARG NODE_ENV=production
ENV NODE_ENV=production
CMD npm start
