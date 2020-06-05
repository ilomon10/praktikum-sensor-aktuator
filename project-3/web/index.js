var express = require('express');                   //  Inisialisasi framework webapp
var app = express();                   //  Inisialisasi framework webapp
var dgram = require('dgram');
var http = require('http').createServer(app);     //  Inisialisasi HTTP server
var io = require('socket.io')(http);              //  Inisialisasi socketIO
var udp = dgram.createSocket('udp4');
var port = 3333;
var udport = 3334;
var ipAddress = require(__dirname + '/ip.js')();

app.use('/', express.static(__dirname + '/public/build/'))

app.get('/', function (req, res) {                    //  Membuat respon url `/`
  res.sendFile(__dirname + '/public/build/index.html');     //  Menampilkan respon
})

udp.on('message', (msg, rinfo) => {
  let raw = msg.toString();
  let split = raw.split(',')
  let data = [ parseFloat(split[2]), parseFloat(split[3]), parseFloat(split[4]) ];
  // console.log(data);
  console.log('Received %d bytes from %s:%d\n',
    msg.length, rinfo.address, rinfo.port)
  io.emit('data', data);
})

io.on('connection', function (socket) {               //  Menghandle koneksi client
  console.log(socket.id + ' connected!');
})

http.listen(port, function () {                       //  Menjalankan program
  var logging = 'listening on:';
  logging += '\nlo\thttp://localhost:' + port;
  ipAddress.forEach(function (v) {
    logging += '\n' + v.name + '\thttp://' + v.address + ':' + port;
  })
  console.log(logging);
})

udp.bind(udport, function () {
  var logging = 'udp on:';
  logging += '\nlo\thttp://localhost:' + udport;
  ipAddress.forEach(function (v) {
    logging += '\n' + v.name + '\thttp://' + v.address + ':' + udport;
  })
  console.log(logging);
});