const express = require("express");
const { faker } = require("@faker-js/faker");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    profile: faker.image.avatar(),
    designation: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(2),
  };
}

router.get("/all", (_req, res) => {
  const FAKE_JSON = Array.from({ length: 20 }, createRandomUser);
  res.send(FAKE_JSON);
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
