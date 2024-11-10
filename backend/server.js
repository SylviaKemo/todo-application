require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
// const taskRoutes = require("./routes/taskRoutes");
const userRoute = require("./routes/userRoute");
const dailyReflectionRoutes = require("./routes/dailyReflectionRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.use("/api/tasks", taskRoutes);
app.use("/api/user", userRoute);
app.use("/api/dailyReflections", dailyReflectionRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //  listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to the db $ listening to port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
