/* http use
var http = require('http');

var server = http.createServer(function (req, res){
	res.writeHead(200, {"Content-type": "text/plain"});
	res.end("Hello, World");
	
	
});

server.listen(8000);
console.log("Server running  at http://localhost:8000");
*/

var express = require('express'),
	con = require('consolidate'),
	mongodb = require('mongodb');
