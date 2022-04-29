const express = require('express');
const morgan = require('morgan');

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes

// Error Handler

module.exports = app;