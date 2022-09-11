const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("./database/mongoose");

const TaskList = require("./database/models/taskList");
const Task = require("./database/models/Task");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
