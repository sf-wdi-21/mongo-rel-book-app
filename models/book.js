var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	comment: String,
	person: String
});

var bookSchema = new Schema({
	title: String,
	author: String,
	description: String, 
	genre: String, 
	ISBN: Number,
	comments: [Comment]
});

var Comment = mongoose.model("Comment", Comment);
var Book = mongoose.model("Book", bookSchema);

module.exports = Book;