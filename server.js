var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './', "./index.html"));
});

server.listen(port, function(){
  console.log('Server Listening on Port 3000')
});

module.exports = server;