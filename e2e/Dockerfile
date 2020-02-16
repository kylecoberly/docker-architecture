FROM cypress/browsers:node12.13.0-chrome78-ff70-brave78
WORKDIR /e2e
COPY package.json /e2e/package.json
COPY cypress.json /e2e/cypress.json
RUN npm i
CMD npx cypress run
