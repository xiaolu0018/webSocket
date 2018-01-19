var app = require('express')();
var server = require('http').Server(app);
var WebSocket = require('ws');

var wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('server: receive connection.');
    
    ws.on('message', function incoming(message) {
        console.log('server: received: %s', message);
    });

    ws.send('这是服务器第一次返回数据');
    var i=1;
    setInterval(function(){
    	i++;
    	ws.send('这是个服务器返回的第'+i+'条数据');
    },5000);
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen(3000);