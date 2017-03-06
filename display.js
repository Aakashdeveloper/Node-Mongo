
/* all together with node html mongodb*/
var express = require('express'),
	app = express(),
	engines = require('consolidate'),
	MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
	
app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err,db){
	assert.equal(null, err);
	
	app.get('/', function(req, res){
		db.collection('companies').find({}).limit(10).toArray(function(err, docs){
				res.render('companies', {'companies': docs});			
			
			});		
		});	
	app.use(function(req, res){
	    res.sendStatus(404);
	});
});



/* server connect*/
var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Server running  at http://localhost %s', port);
	
	
});