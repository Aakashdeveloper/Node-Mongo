var express = require("express"),
	mongoose = require("mongoose");
	bodyParser = require("body-parsers");
	
var db = mongoose.connect('mongodb://localhost/bookApi');

var Book = require('./model/bookModel');

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var bookRouter = express.Router();

bookRouter.route('/Books')
/*post value*/
    .post(function(req,res){
		var book = new Book(req.body);
		console.log(book);
		res.send(book);
	});
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

