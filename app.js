var express = require('express');

var app = express();

app.get('/', function (req, res) {
 res.send('hello jenkins !');
});

app.listen(process.env.PORT || 5000);
console.log("Server started on port 80...");

module.exports = app;