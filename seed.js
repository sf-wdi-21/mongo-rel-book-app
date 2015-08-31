var db = require("./models");
var ourBooks = require("./books.json");

/* Add books to DB */
// db.Book.create(ourBooks, function(err, book) {
// 	if(err){return console.log(err);}
// 	console.log("Added everything");
// 	process.exit(0);
// })

// db.Book.findOne({title: "Ender's Game"}, function (err, book) {
// 	if(err) {return console.log(err);}
// 	var newComment = {
// 		comment: "Harrison Ford Is a horrible version.",
// 		person: "Justin"
// 	};
// 	book.comments.push(newComment);
// 	book.save(function(err, success) {
// 		if(err) {return console.log(err);}
// 		console.log("Comment added Successfully");
// 		process.exit(0);
// 	});
// });

db.Book.findOne({title: "Ender's Game"}, function (err, book) {
	if(err) {return console.log(err);}
	/* To remove ANY embedded document, simplly call .remove(); */
	book.comments[0].remove();
	book.save(function(err, success) {
		if(err) {return console.log(err);}
		console.log("Successfully removed comment");
		process.exit(0);
	})
})
