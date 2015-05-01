var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './', "./index.html"));
});



server.listen(3000, function(){
  console.log('Server Listening on Port 3000')
});

module.exports = server;