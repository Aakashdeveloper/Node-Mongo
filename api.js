var express = require("express"),
	mongoose = require("mongoose");
	
var db = mongoose.connect('mongodb://localhost/bookApi');

var Book = require('./model/bookModel');

var app = express();
var port = 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
	.get(function(req, res){
		
		var query ={};
		if(req.query.genre)
		{
			query.genre = req.query.genre;
		}
		Book.find(query, function(err,books){
			if(err)
				res.status(500).send(err);
			else
				res.json(books);	
		});
	});
#for particluar field(id)

bookRouter.route('/Books/:bookId')
	.get(function(req, res){
		
		Book.findById(req.params.bookId, function(err,book){
			if(err)
				res.status(500).send(err);
			else
				res.json(book);	
		});
	});



app.use('/app', bookRouter);
	
app.get('/', function(req, res){
	res.send("testing");
	
});

app.listen(port, function(){
	console.log("server running on port" +port);
});

