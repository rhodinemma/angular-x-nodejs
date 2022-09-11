const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://rhodzeey:12345@cluster0.tpb0e.mongodb.net/angular?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected!");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose;
