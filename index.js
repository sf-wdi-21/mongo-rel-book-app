var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path"),
    db = require("./models");

var app = express(),
    views = path.join(__dirname, "views");

app.use(bodyParser.urlencoded({extended: true}));

// tell our application what our
// assets are
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));




app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});

app.get("/books", function (req, res) {
    db.Book.find({},
        function (err, books) {

            res.send(books);
        });
});

app.post("/books", function(req, res){
    var newComment = {comment: req.body.comment, person: req.body.user};
    db.Book.findOne({_id: req.body.id}, function(err, book){
        if(err){
            return console.log(err)
        }
        console.log(book.comments);
        book.comments.push(newComment);
        book.save(function(err, result){
        });
    })
    res.redirect('/');
});

app.delete("/books", function(req, res){
    console.log(req.body.bookID);
    db.Book.findOne({_id: req.body.bookID}, function(err, book){
        console.log(book);
        var index;
        for(i = 0; i < book.comments.length; i++){
            console.log(book.comments[i]._id);
            // if(book.comments[i]._id === req.body.commentID){
            //     index = i;
            // }
        }
        book.comments.splice(index, 1);
        book.save(function(err, result){
            console.log(result);
            res.sendStatus(200);
        });
        
    });
});

app.listen(3000, function() {
    console.log("Server is now listening on localhost:3000");
})
