require("dotenv").config({
  path: process.env.ENVIRONMENT === "development" ? ".env.test" : ".env",
});

const moongose = require("mongoose");

moongose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

moongose.Promise = global.Promise;

module.exports = moongose;
