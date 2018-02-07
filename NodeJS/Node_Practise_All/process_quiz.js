var questions=[
"what is your name",
"what is your hobby",
"what is your office"
];

var answers=[];
function quiz(i){
	
	process.stdout.write(`\n\n\n\welcome ${questions[i]}`);
	process.stdout.write('   >   ');
}

process.stdin.on('data' ,function(data){
	
	answers.push(data.toString().trim());
	if(answers.length<questions.length ){
	quiz(answers.length);
	}else process.exit();
});

process.on('exit', function(){
	
	process.stdout.write(`\n\n\n\welcome ${answers}\n\n`);
});
quiz(0);

