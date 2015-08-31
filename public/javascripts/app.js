// wait for the document to be ready
$(function () {
    console.log("app.js is now running");

    var $booksCon = $("#booksCon");
    var bookHTML = $("#bookTemp").html();
    var bookTemp = _.template(bookHTML);

    $.get("/books").
        done(function(data) {
            $(data).each(function (index, book) {
                var $book = $(bookTemp(book));
                $booksCon.append($book);
            });
    });



});


function deleteComment(context){
    console.log(context.name);
    console.log(context.id);
    var toDelete = {commentID: context.id, bookID: context.name};
    $.ajax({
        url: "/books",
        type: "DELETE",
        data: toDelete,
        success: function(){
            window.location.reload();
        }
    });
};