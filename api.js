var express = require("express"),
<<<<<<< HEAD
	mongoose = require("mongoose");
	
var db = mongoose.connect('mongodb://localhost/bookApi');

var Book = require('./model/bookModel');

var app = express();
var port = 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
	.get(function(req, res){
		Book.find(function(err,books){
			if(err)
				console.log(err);
			else
				res.json(books);	
		});
	});

app.use('/app', bookRouter);
	
app.get('/', function(req, res){
	res.send("testing");
	
});

app.listen(port, function(){
	console.log("server running on port" +port);
});
=======
    gulp = require("gulp"),
    nodemon = require('gulp-nodemon");
    
gulp.task['default', function(){
	        nodemon({
			script: "app.js",
			ext: "js",
			env:{
				PORT:8000
			},
			ignore: ['/node_modules/..']
		});
		.on('restart', function(){
				console.log("restart");
		});
}];
>>>>>>> 66acb6304f36a586b5399d1396fe539a86317093
