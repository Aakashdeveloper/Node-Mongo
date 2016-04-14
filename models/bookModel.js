var mongoose = require('mongoose'),
	schema = mongoose.Schema;

var bookModel = new Schema({
	title:{
		type: String
	},
	author: {type: String},
	genre:  {type: String},
	read:{type: Boolen, default:false},
	
});

module.exports= mongoose.model('Book', bookModel);
