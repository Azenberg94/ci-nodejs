if (process.env.NODE_ENV === 'test')
    var port = 3000;
else
    var port = 80;


var express = require('express');
var app = express();

app.get('/', function (req, res) {
 res.send('Hello Azedine !');
});

app.listen(port);
console.log("Server started on ports " + port + "...");

module.exports = app;