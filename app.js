/*
var http = require('http');

var server = http.createServer(function (req, res){
	res.writeHead(200, {"Content-type": "text/plain"});
	res.end("Hello, World");
	
	
});

server.listen(8000);
console.log("Server running  at http://localhost:8000");


var express = require('express'),
	con = require('consolidate'),
	mongodb = require('mongodb');
*/


/* connect to mongodb for shell
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/video', function(err,db){
	
	assert.equal(null, err);
	
	db.collection('movies').find({}).toArray(function(err, docs){
		
		docs.forEach(function(doc){
				console.log(doc.title);
			
		});
		
		
	});
	
	
	
});
*/

/* all together with node html mongodb
var express = require('express'),
	app = express(),
	engines = require('consolidate'),
	MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
	
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017/video', function(err,db){
	assert.equal(null, err);
	
	app.get('/', function(req, res){
		db.collection('movies').find({}).toArray(function(err, docs){
			res.render('hello', {'movies': docs});
		});	
	});
	app.use(function(req, res){
	    res.sendStatus(404);
	});
});

/*app.get('/', function(req, res){
	res.render('hello', {'name' :'Templates' })
	
});
*/

/* server connect
var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Server running  at http://localhost %s', port);
	
	
});
* */

/* get request*/
var express = require('express'),
	app = express(),
	engines = require('consolidate');
	
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');



//error handler

function errorHandler(err, req, res, next){
	console.log(err.message);
	console.log(err.stack);
	res.status(500);
	res.render('error_template', {error:err});
}




app.use(errorHandler);

app.get('/:name', function(req, res, next){
	var name = req.params.name;
	var getvar1 = req.query.getvar1;
	var getvar2 = req.query.getvar2;
	res.render('hello', {name :name, getvar1: getvar1, getvar2: getvar2});
	
	
	
});

app.listen(3000);






































