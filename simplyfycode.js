//require routes folder for all routes, just minifying code to  make it simple and clean.

var express = require("express"),
	mongoose = require("mongoose");
	bodyParser = require("body-parsers");
	
var db = mongoose.connect('mongodb://localhost/bookApi');

var Book = require('./model/bookModel');

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

bookRouter = require('./routes/routes')(Book);



app.use('/app/books', bookRouter);
	
app.get('/', function(req, res){
	res.send("testing");
	
});

app.listen(port, function(){
	console.log("server running on port" +port);
});

