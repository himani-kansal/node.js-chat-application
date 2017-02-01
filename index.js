// 11:35 pm
// add all required modules in index.js
var app=require('express')();       //to create server using express // constructor calling
var http=require('http').Server(app);   //the protocol used by express
var io=require('socket.io')(http);   // js  library for real time communication
var path=require('path');  //  path ?

// create server for our application

app.get('/',function(req,res){
	var express=require('express');
	app.use(express.static(path.join(__dirname)));
	res.sendFile(path.join(__dirname,'../chat-application','index.html'));
});


// register events on socket connection
// two events created .... 1)chatMessage 2)notifyUser
io.on('connection',function(socket){
	socket.on('chatMessage',function(from,msg){
	io.emit('chatMessage',from,msg);
});
	socket.on('notifyUser',function(user){
	io.emit('notifyUser',user);
});
});

//
http.listen(3000,'0.0.0.0',function(){
console.log('listening on *:3000');
});