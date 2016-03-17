var http = require('http');

var server = http.createServer(function (req, res){
	response.writeHead(200, {"Content-type": "text/plain"});
	response.end("Hello, World");
	
	
});

server.listen(8000);
