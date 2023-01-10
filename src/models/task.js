const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    default: false,
    type: Boolean,
  },
});

taskSchema.pre("save", function (next) {
  const task = this;

  if (task.isModified("completed")) {
    console.log("this is pre save");
  }

  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
