//my code
function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t=setInterval(printHello, 1000);

function Hello(){
   clearInterval(t)
}
setTimeout(Hello, 9000);
// my code


