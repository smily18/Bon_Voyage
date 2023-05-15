require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cityRoutes = require("./routes/cities");
const busRoutes = require("./routes/buses");
const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/image");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["https://localhost:4000", "https://Bonvoyage-bus-tracking.onrender.com"],
  })
);

app.use("/city", cityRoutes);

app.use("/bus", busRoutes);

app.use("/user", userRoutes);

app.use("/image", imageRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to Database");
    app.listen(4000, () => {
      console.log("server is up and running !!!");
    });
  })
  .catch((err) => console.log(err));
