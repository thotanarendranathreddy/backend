var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
Books=require('./book.js');
//connect to the mongoosedb
mongoose.connect('mongodb://localhost:27017/bookstore');
//var db=mongoose.connction;
app.use(bodyParser.json());
app.get('/',function(req,res){
	res.send('Please use /api/books or  /api/lyrics');
	
});
//all books
app.get('/api/books/',function(req,res){
	
	Books.getBooks(function(err,books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});
//search book with id
app.get('/api/book/:_id',function(req,res){
	
	Books.getBookById(req.params._id,function(err,books){
		if(err){
			throw err;
		}
		res.json(books);
	});
});
//create book
app.post('/api/book/',function(req,res){
	var bookOne=req.body;
	Books.addBook(bookOne,function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//update book
app.put('/api/book/:_id',function(req,res){
	var id=req.params._id;
	var book=req.body;
	Books.updateBook(id,book,{},function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

//Delete book
app.delete('/api/book/:_id',function(req,res){
	var id=req.params._id;
	Books.removeBook(id,function(err,book){
		if(err){
			throw err;
		}
		res.json(book);
	});
});

var server=app.listen(8088, function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log('mangoo app at http://%s:%s', host, port);
});