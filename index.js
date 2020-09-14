var express = require("express");
var app = express();

var fs = require("fs");
var _ = require("lodash");

var cars = [];

//variables
const data = [
  {
    id: "1",
    model: "mercedes",
    reference: "class c",
    color: "blue",
  },
  {
    id: "2",
    model: "bmw",
    reference: "serie 1",
    color: "black",
  },
  {
    id: "3",
    model: "audi",
    reference: "a5",
    color: "green",
  },
  {
    id: "4",
    model: "peugeot",
    reference: "208",
    color: "white",
  },
  {
    id: "5",
    model: "renaut",
    reference: "civic",
    color: "red",
  },
];

app.get("/", function (req, res) {
  res.send(data);
});

var server = app.listen(3001, function () {
  console.log("Server running at http://localhost:" + server.address().port);
});
