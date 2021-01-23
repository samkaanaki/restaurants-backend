// require in the Express framework
const express = require('express');

// assigns instance of express server to app variable and makes use of built in body-parser
const app = express();
app.use(express.json());

module.exports = app;
