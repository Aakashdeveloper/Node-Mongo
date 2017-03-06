// content of index.js
var http = require('http')  
var port = 3000



var server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }