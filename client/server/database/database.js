const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose.connect(uri, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log(`Connected To MongoDB, ${mongoose.connection.host}`);
  });

  mongoose.connection.on("error", (err) => {
    console.error(err);
  });
};

module.exports = connectDB;
