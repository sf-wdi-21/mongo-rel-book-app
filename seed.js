var db = require('./models');
var ourBook = require("./books.json");

// db.Book.create(ourBook, function(err, result){
// 	if(err){
// 		console.log(err);
// 	}
// 	console.log("The DB has been seeded");
// });

db.Book.findOne({title: "Ender's Game"}, function(err, book){
	if(err){
		console.log(err);
	}else{
		var newComment = {comment: "Someone dies I think", person: "Will"};
		book.comments.push(newComment);
		book.save(function(err, result){
			if(err){
				console.log(err);
			}
			console.log("added a comment");
		});
	}
})