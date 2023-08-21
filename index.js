const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
const app = express();

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.use(upload.array());

const blogs = require("./blogs.js");

//both index.js and blogs.js should be in same directory
app.use(function (req, res, next) {
  console.log("A request for blogs received at " + Date.now());
  next();
});
app.use("/blogs", blogs);
//Other routes here
app.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});
app.listen(8000);
