var express = require("express");
var app = express();
var books = [];
var id = 1;

app.set("view enigine", "ejs");


req.body.name

app.get("/", function(req, res){
	res.redirect("/books")
});
//show me all the books
app.get("/books", function(req, res){
	res.render("index.ejs")
})
//give me a form to make new books
app.get("/books/new", function(req, res){
	res.render("new")
})
//when for is submitted...do this
app.post("/books", function(req, res){
	//do some creating
	res.redirect("/")
})
//new, index, edit, show
app.put("/books/:id", function(req, res){
	book.forEach(function(book){
		
	})
	//do some creating
	res.redirect("/")
})
app.get ("/books/:id/edit", function(req, res){
	var searchedBookId = Number(req.params.id)
	book.forEach(function(book){
		if(searchedBookId === book.id){
			res.render("edit", {book:book});
		}
	});
});


app.put("/edit", function(req, res){
	books.forEach(function(book){
		book.title = req.body.title;
	book.author = req.body.author;
	book.image = req.body.image;
	});
	res.redirect("/");
});

