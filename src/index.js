const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

const app = express();
const port = process.eventNames.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/users", (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;

  User.findById(_id)
    .then((user) => {
      if (!user) {
        return res.status(404).send();
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

app.post("/tasks", (req, res) => {
  const task = new Task(req.body);

  task
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/tasks", (req, res) => {
  Task.find({})
    .then((tasks) => {
      res.status(200).send(tasks);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

app.get("/tasks/:idbro", (req, res) => {
  const _id = req.params.idbro;

  Task.findById(_id)
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.status(200).send(task);
    })
    .catch((err) => {
      res.status(500).send();
    });
});

app.listen(port, () => {
  console.log("Server is up and running in port " + port);
});
