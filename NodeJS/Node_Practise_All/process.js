function grab(flag){
	var index=process.argv.indexOf(flag);
	return(index === -1) ? null :  process.argv[index+1];
}
var user=grab('--user');
var greeting=grab('--greeting');

if(!user || !greeting){
	console.log('you blew it');
}else{
	console.log(`welcome ${user},${greeting}`);
	console.log(process.argv.indexOf('--user'));
	console.log(process.argv.indexOf('--greeting'));
	process.stdout.write("can do like this also ")
}