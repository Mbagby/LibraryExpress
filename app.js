var express = require("express");
var app = express();
methodOverride = require("methodOverride");
bodyParser = require("body-parser")

//Below NOT MY CODE//From Colt notes
var morgan = require("morgan");
app.use(morgan("tiny")
// NOt sure what the above code does!!!

app.set("view enigine", "ejs");
app.use(express.static(__dirname + '/public'));//to add style sheet
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

var books = [];
var id = 1;
var searchedBookId;

app.get("/", function(req, res){
	res.redirect("/books")
});// This shows me all the books

app.get("/books", function(req, res){
	res.render("index.ejs", {books:books})
}) //gives me a form to make new books



app.get("/books/new", function(req, res){
	res.render("new")
})//when for is submitted...do this


app.post("/books", function(req, res){
	var newBook = req.body.book;
	newBook.id = id;
	books.push(newBook); //pushing book into the array
	id++;
	res.redirect("/books")// why use /books not "/"
})

//new, index, edit, show

app.get("/books/:id", function(req, res){
	book.forEach(function(book){
		if(book.id === Number(req.params.id)){
			searchedBookId = book;
		}	
	});
		if(!searcherBookId){
			res.render("404"); //Not my piece of code. If book id isnt there show 404 error
		}
	res.render("show.ejs", {book:searchedBookId})
	//use render NOT redirect
});

app.get("/books/:id/edit", function(req, res){
	book.forEach(function(book){
		if(book.id === Number(req.params.id)){
			searchedBookId = book;
		}	
	});
		if(!searcherBookId){
			res.render("404"); 
		}
	res.render("edit", {book:searchedBookId})
});

// Original Code: See the above code. Its better
// app.get ("/books/:id/edit", function(req, res){
// 	var searchedBookId = Number(req.params.id)
// 	book.forEach(function(book){
// 		if(searchedBookId === book.id){
// 			res.render("edit", {book:book});
// 		}
// 	});
// });


app.put("/books/:id", function(req, res){
	books.forEach(function(book){
		if(book.id === Number(req.params.id)){
			book.title = req.body.book.title; //DONT FORGET BOOK BEFORE TITLE
			book.author = req.body.book.author;
			book.year = req.body.book.year;
		}
	});
		if(!searcherBookId){
			res.render("404"); 
		}
	res.redirect("/books"); //NOT "/"
});

//Did not get the delete part...here is COlt/Elie's code
app.delete("books/:id", function(req, res){
	books.forEach(function(book){
		if(book.id ===Number(req.params.id)){
			books.splice(books.indexOf(book), 1);
		}
	});
	res.redirect("/books");
});
app.get("*", function(req, res){
	res.render("404");
});

app.listen(3000, function(){
});

