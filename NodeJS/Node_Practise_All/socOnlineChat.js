var express = require('express');
var app = express();
var util=require('util');
var fs=require('fs');
var server = app.listen(8089, function () {
   var host = server.address().address
   var port = server.address().port
   console.log(" chat app at http://%s:%s", host, port)

})
var io=require('socket.io').listen(server);
var users=[];
var connections=[];

app.get('/', function(req, res) {
   res.sendFile( __dirname + "/" + "soc.html" );
})
app.get('/:id', function(req,res){
	fs.readFile( __dirname + "/" + "users.json", 'utf8',function (err, data) {
		usersNew = JSON.parse( data );
		user=usersNew["user"+req.params.id];
       console.log( user );
       res.end( JSON.stringify(user) );
   });
})

io.sockets.on('connection',function(socket){
	connections.push(socket);
	util.log('one socket connected: %s sockets connected', connections.length);
	
	//Disconnect
	socket.on('disconnect',function(data){		
		users.splice(users.indexOf(socket.username),1);
		updateUsernames();
		connections.splice(connections.indexOf(socket),1);
	util.log('one socket Disconnected: %s sockets connected', connections.length);
	});
	// Send Message
	socket.on('send message',function(data){
		io.sockets.emit('new message', {msg:data, user: socket.username} );
	});
	// new useur
	socket.on('new user',function(data, callback){
		callback(true);
		socket.username=data;
		users.push(socket.username);
		updateUsernames();
	});
	function updateUsernames(){
		io.sockets.emit('get users', users);
	}
});