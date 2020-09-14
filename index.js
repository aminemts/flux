var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
var fs = require("fs");
var _ = require("lodash");
const cars = [];
for (let i = 1; i < 10; i++) {
  cars.push({
    id: i,
    marque: "Car #" + i,
    description: "a great car to drive",
  });
}
app.get("/", function (req, res) {
  res.send(cars);
});
var server = app.listen(3001, function () {
  console.log("Server running at http://localhost:" + server.address().port);
});
