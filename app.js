// database
// const mongoConnect = require('./utils/database').mongoConnect
const MONGODB_URI = "mongodb://127.0.0.1:27017/Inventory";
const mongoose = require("mongoose");

// FrameWork
const express = require("express");

const app = express();

// Import Middle-ware's
const bodyParser = require("body-parser");

// routes
const inventoryRoutes = require('./routes/inventory')
const authRoutes = require('./routes/auth')

// Template Engine
app.set("view engine", "ejs");
app.set("views");

// use middle-wares
app.use(bodyParser.urlencoded({ extended: false }));

app.use(inventoryRoutes)
app.use(authRoutes)

mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
