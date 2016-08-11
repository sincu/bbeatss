var express = require('express');
var app = express();
var path = require('path');
var cons = require('consolidate');
var mongodb = require('mongodb');
var pug = require('pug');
var assert = require('assert');

app.use('/static', express.static(__dirname + '/public'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Express server running at http://localhost:' + server.address().port);
})
