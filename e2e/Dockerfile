FROM cypress/browsers:node12.13.0-chrome78-ff70-brave78
WORKDIR /e2e
COPY package.json .
RUN npm i
COPY cypress.json .
COPY wait-for-it.sh .
CMD ["npx", "cypress", "run"]
