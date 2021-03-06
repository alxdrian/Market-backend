const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/categories", require("./routes/categoryRoutes"));

// Error Handler
app.use((err, req, res, next) => {
  console.log(err.status);
  console.log(err.message);

  res.status(err.status || 500);
  res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;