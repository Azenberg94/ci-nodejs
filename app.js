if (process.env.NODE_ENV === 'test') {
    require('dotenv').load();
}

var express = require('express');
var app = express();

app.get('/', function (req, res) {
 res.send('hello jenkins');
});

app.listen(process.env.PORT || 80);
console.log("Server started on port " + process.env.PORT + "...");

module.exports = app;