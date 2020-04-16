require("dotenv").config({
  path: process.env.ENVIRONMENT === "development" ? ".env.test" : ".env",
});

const app = require("./app");

app.listen(process.env.PORT || 3001);
