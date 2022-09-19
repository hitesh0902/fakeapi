const express = require("express");
const { faker } = require("@faker-js/faker");
const app = express();

const PORT = 4000;

function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    profile: faker.image.avatar(),
    designation: faker.name.jobTitle(),
    description: faker.lorem.paragraphs(2),
  };
}

app.get("/all", (_req, res) => {
  const FAKE_API_JSON = {
    users: Array.from({ length: 20 }, createRandomUser),
  };

  res.send(FAKE_API_JSON);
});

app.listen(PORT, () => console.log("Running in port:", PORT));
