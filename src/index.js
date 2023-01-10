const express = require("express");
require("./db/mongoose");
const userRouter = require("../src/routers/user");
const taskRouter = require("../src/routers/task");

const app = express();
const port = process.eventNames.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up and running in port " + port);
});

const bcrypt = require("bcryptjs");

const myFunction = async () => {
  const password = "red12345op";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("red12345op", hashedPassword);
  console.log(isMatch);
};

myFunction();
