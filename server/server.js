require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Bus = require("./models/busModel");
const cityRoutes = require("./routes/cities");
const busRoutes = require("./routes/buses");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/city/", cityRoutes);

app.use("/bus/", busRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
    app.listen(4000, () => {
      console.log("server is up and running !!!");
    });
  })
  .catch((err) => console.log(err));
