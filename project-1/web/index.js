var app = require('express')();                   //  Inisialisasi framework webapp
var http = require('http').createServer(app);     //  Inisialisasi HTTP server
var io = require('socket.io')(http);              //  Inisialisasi socketIO
var port = 3333;
var ipAddress = require(__dirname + '/ip.js')();

app.get('/', function (req, res) {                    //  Membuat respon url `/`
  res.sendFile(__dirname + '/public/index.html');     //  Menampilkan respon
})

io.on('connection', function (socket) {               //  Menghandle koneksi client
  console.log(socket.id + 'connected!');
  socket.on('produce', (m) => {                       //  Menghandle data yang masuk
    console.log(m);
  })
  socket.on('consump', (m) => {
    console.log(m);
  })
})

http.listen(port, function () {                       //  Menjalankan program
  var logging = 'listening on:';
  logging += '\nlo\thttp://localhost:' + port;
  ipAddress.forEach(function (v) {
    logging += '\n' + v.name + '\thttp://' + v.address + ':' + port;
  })
  console.log(logging);
})