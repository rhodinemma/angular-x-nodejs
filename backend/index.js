const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("./database/mongoose");

const TaskList = require("./database/models/taskList");
const Task = require("./database/models/Task");

app.use(cors());
app.use(express.json());

app.get("/tasklists", (_req, res) => {
  TaskList.find({})
    .then((lists) => {
      res.status(200).send(lists);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/tasklists/:tasklistId", (req, res) => {
  let tasklistId = req.params.tasklistId;
  TaskList.find({ _id: tasklistId })
    .then((taskList) => {
      res.status(200).send(taskList);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/tasklists", (req, res) => {
  let taskListObj = { title: req.body.title };
  TaskList(taskListObj)
    .save()
    .then((taskList) => {
      res.status(201).send(taskList);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.put("/tasklists/:tasklistId", (req, res) => {
  TaskList.findOneAndUpdate({ _id: req.params.tasklistId }, { $set: req.body })
    .then((taskList) => {
      res.status(200).send(taskList);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete("/tasklists/:tasklistId", (req, res) => {
  TaskList.findByIdAndDelete(req.params.tasklistId)
    .then((taskList) => {
      res.status(200).send(taskList);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
