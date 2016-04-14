var express = require("express"),

var app = express();
var port = 3000;

var bookRouter = express.Router();

bookRouter.route('/Book')
	.get(function(req, res){
		var responseJson = (hello: "this is my api");
		
		res.json(responseJson);
	});

app.use('/app', bookRouter);
	
app.get('/', function(req, res){
	res.send("testing");
	
});

app.listen(port, function(){
	console.log("server running on port" +port);
});
