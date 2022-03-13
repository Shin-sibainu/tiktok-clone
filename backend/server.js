const express = require("express");
const mongoose = require("mongoose");
//app config
const app = express();
const PORT = 8000;

//middlewares

//dbconfig

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

//listen
app.listen(PORT, () => console.log("server running"));
