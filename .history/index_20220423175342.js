var express = require('express');
var app = express();
var port = 3000;


app.use(express.static('public'));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});