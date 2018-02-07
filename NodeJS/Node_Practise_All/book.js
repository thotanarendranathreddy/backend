var mongoose=require('mongoose');

var bookSchema=mongoose.Schema({
	name:{
		type:String,
		requires:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
	
	
});
var Books=module.exports =mongoose.model('Books',bookSchema);


//Get all books
module.exports.getBooks=function(callback){
	
	Books.find(callback);
}

//Get by id
module.exports.getBookById=function(id,callback){
	var query ={_id:id};
	Books.findById(query,callback);
}

//addBooks
module.exports.addBook=function(book,callback){
	
	Books.create(book,callback);
}

//update books
module.exports.updateBook=function(id,book,options,callback){
	var query ={_id:id};
	var update={
		name:book.name
	}
	Books.findOneAndUpdate(query,update,options,callback);
}
//Delete books
module.exports.removeBook=function(id,callback){
	var query={_id:id};
	Books.remove(query,callback);
}
