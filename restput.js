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
			book.save();
			res.status(201).send(book);
		//console.log(book);
		//res.send(book);
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
	
	
// making middleware
	bookRouter.use('/Books/:bookId', function(req, res, next){
		Book.findById(req.params.bookId, function(err,book){
			if(err)
				res.status(500).send(err);
			else if(book)
			{
				req.book = book;
				next();
			}
			else
			{
				res.status(404).send("no book found");
			}
					
		});
		
	});
	
//for particluar field(id)

bookRouter.route('/Books/:bookId')
	.get(function(req, res){
		//using middle ware for this piece of code
			res.json(res.book);
		/*Book.findById(req.params.bookId, function(err,book){
			if(err)
				res.status(500).send(err);
			else
				res.json(book);	
		});*/
	 });
// update date using put(will delete pervious data and insert 
// only new data

	.put(function(req, res){
		//using middle ware "req"
		
		        req.book.title = req.body.title;
				req.book.author = req.body.author;
				req.book.genre = req.body.genre;
				req.save();
				res.json(req.book);
		/*Book.findById(req.params.bookId, function(err, book){
			if(err)
				res.status(500).send(err);
			else
				//field what are present in schema
				book.title = req.body.title;
				book.author = req.body.author;
				book.genre = req.body.genre;
				book.save();
				res.json(book);
		});*/
		
	 }):
	 
// update date using patch using middle to reduce repetation of code
// 
	.patch(function(req,res){
		if(req.body._id){
			delete req.body._id
			
		}
		for (var p in req.body)
		{
			req.book[p] = req.body[p];
		}
		req.book.save(function(err){
			if(err)
				res.status(500).send(err);
			else{
				res.json(req.book);
				
			}
			
		});
		
	 });




app.use('/app', bookRouter);
	
app.get('/', function(req, res){
	res.send("testing");
	
});

app.listen(port, function(){
	console.log("server running on port" +port);
});

