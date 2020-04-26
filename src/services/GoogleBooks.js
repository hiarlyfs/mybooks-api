const axios = require("axios");

const apiBaseUrl = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

module.exports = apiBaseUrl;
