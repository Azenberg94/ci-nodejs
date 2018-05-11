if (process.env.NODE_ENV === 'test')
    var port = 3000;
else
    var port = 80;


var express = require('express');
var app = express();

app.get('/', function (req, res) {
 res.send('hello jenkins');
});

app.listen(port);
console.log("Server started on port " + port + "...");

module.exports = app;