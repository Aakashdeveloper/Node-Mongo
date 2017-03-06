var mongoose = require('mongoose'),
	schema = mongoose.Schema;

var bookModel = new schema({
	 name : { type: String},
	 permalink : { type: String},
	 crunchbase_url : { type: String},
	 homepage_url : { type: String},
        
});

module.exports= mongoose.model('hw1_1', bookModel);
