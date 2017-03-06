var express = require('express')
	,app = express()
	, cons = require('consolidate');


app.engine('html', cons.swig)
app.set('view engine', 'html');
app.set('views', __dirname+ '/views');
app.use(app.router);


app.get('/:name',function(req,res,next){
		var name= req.params.name;
		var getvar1 = req.query.getvar1;
		var getvar2 = req.query.getvar2;
		res.render('hello',{name:name,getvar1:getvar1,getvar2:getvar2})
});

app.listen(3000);
console.log("app is running");