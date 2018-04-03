

//Lists Serialports available
//This is the code from Courtney's, there is not much modification.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;
var SerialPort = require('serialport');
var serialVal;

var mySerialPort = new SerialPort('COM10', { //paste your port path here
  parser: new SerialPort.parsers.Readline('\n')
});



server.listen(port, function(){
	console.log('Server listening on ' + port);
});

io.on('connection',function(client){
	console.log('Socket connected... :)');
  	client.emit('Website is working');
  		//This is when mouse i
  		client.on('0', function(){
  			console.log("...")

	 		mySerialPort.write("0");

		});

  		//This is when "mouse down"
		client.on('1', function(){
			console.log("action taken")

	 		mySerialPort.write("1");

		});

	});

//Commenting the line below for now:
app.use(express.static('.'))

app.get('/', function(req,res){
	console.log('serving index.html');
	res.sendFile(__dirname + '/Birby-Chat.html');
	// res.sendFile(__dirname + '/digitalWrite-original.html');


});

