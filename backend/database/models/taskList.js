const mongoose = require("mongoose");

const TaskListSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    minlength: 3,
    required: true,
  },
});

const TaskList = mongoose.model("TaskList", TaskListSchema);
module.exports = TaskList;
