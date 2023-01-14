const request = require("supertest");
const app = require("../src/app");
const User = require("../src/models/user");

const userone = {
  name: "Mike",
  email: "mikemikaj@gmail.com",
  password: "whatthehell123",
};
beforeEach(async () => {
  await User.deleteMany();
  await new User(userone).save();
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Anjana",
      email: "anjanach@ieee.org",
      password: "mywordpac123",
    })
    .expect(201);
});

test("Should login exsiting user", async () => {
  await request(app).post("/users/login").send({
    email: userone.email,
    password: userone.password,
  });
});

test("Should not login nonexsiting user", async () => {
  await request(app)
    .post("/users/login")
    .send({
      email: "anjanahe@gmail.com",
      password: "kalukumarajhon",
    })
    .expect(400);
});
