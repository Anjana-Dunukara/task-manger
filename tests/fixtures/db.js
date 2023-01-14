const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../../src/models/user")
const Task = require("../../src/models/task")

const userOneId = mongoose.Types.ObjectId();
const userone = {
    _id: userOneId,
    name: "Mike",
    email: "mikemikaj@gmail.com",
    password: "whatthehell123",
    tokens: [{token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)}],
};

const userTwoId = mongoose.Types.ObjectId();
const usertwo = {
    _id: userTwoId,
    name: "kaml",
    email: "kamalaharis@gmail.com",
    password: "mageprathmaadare",
    tokens: [{token: jwt.sign({_id: userTwoId}, process.env.JWT_SECRET)}],
};

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: "First task for testing",
    completed: true,
    owner: userone._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: "Second task for testing",
    completed: false,
    owner: usertwo._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: "Three task for testing",
    completed: true,
    owner: userone._id
}

const setUpDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
    await new User(userone).save();
    await new User(usertwo).save();
}

module.exports = {userOneId, userone, setUpDatabase, userTwoId, usertwo, taskOne}