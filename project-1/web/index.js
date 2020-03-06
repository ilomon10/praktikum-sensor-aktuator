var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = 3333;
var ipAddress = require(__dirname + '/ip.js')();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

io.on('connection', function (socket) {
  console.log(socket.id + 'connected!');
  socket.on('produce', (m) => {
    console.log(m);
  })
  socket.on('consump', (m) => {
    console.log(m);
  })
})

http.listen(port, function () {
  var logging = 'listening on:';
  logging += '\nlo\thttp://localhost:' + port;
  ipAddress.forEach(function (v) {
    logging += '\n' + v.name + '\thttp://' + v.address + ':' + port;
  })
  console.log(logging);
})