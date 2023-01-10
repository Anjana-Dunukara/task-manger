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

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "thisisjwttest", {
    expiresIn: "4 days",
  });
  console.log(token);

  const data = jwt.verify(token, "thisisjwttest");
  console.log(data);
};

myFunction();
