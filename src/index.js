require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🟢 DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log("🔴 There was an error on the DB connection method.");
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});
