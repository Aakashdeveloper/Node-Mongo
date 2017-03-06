var express = require("express"),
	mongoose = require("mongoose");
	
var db = mongoose.connect('mongodb://localhost/login');

var Book = require('./models/bookModel');

var app = express();
var port = 8000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});
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
//for particluar field(id)

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

