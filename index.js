/* global __dirname */

//this is only to create a temporary server and front-end to test this directive
//the final version will only contain the directive

var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

var server = app.listen(3000, function() {
  var host = 'localhost';
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});