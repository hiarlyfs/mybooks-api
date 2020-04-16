const axios = require("axios");

const apiBaseUrl = axios.create({
  baseURL: process.env.MERCADO_EDITORIAL,
});

module.exports = apiBaseUrl;
