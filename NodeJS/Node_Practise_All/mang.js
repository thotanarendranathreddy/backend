var mongoose=require('mongoose');
mongoose.Promise = require("bluebird");
//Connect to the database
mongoose.connect('mongodb://<nath>:<nath.1>@ds143231.mlab.com:43231/employee_1');


//Create Schema

var todoSchema =new mongoose.Schema({
	item:String
})

  var uri = 'mongodb://<nath>:<nath.1>@ds143231.mlab.com:43231/employee_1';
    // Use bluebird
    var options = { promiseLibrary: require('bluebird') };
    var db = mongoose.createConnection(uri, options);
var Todo=db.model('Todo',todoSchema);
var itemOne=Todo({item : 'buy sweets'}).save(function(err){
	if(err){
		throw err;
	}
	console.log('item saved');
});