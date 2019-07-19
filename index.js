var express = require('express');

var app = express();

app.use(express.static("./dist"));

app.listen(8081, console.log("Listening on port 8081"));