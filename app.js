//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/userDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const User = new mongoose.Model({'user': userSchema});

app.get("/", function (req, res) {
  res.send("home");
});

app.get("/login", function (req, res) {
  res.send("login");
});

app.listen(3000, function(req, res) {
    console.log("listening on port 3000");
});
