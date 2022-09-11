const express = require("express");
const app = express();

const mongoose = require("./database/mongoose");

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
