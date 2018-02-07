
var buf1 = new Buffer(256);
var len = buf1.write("Simply Easy Learning");
console.log("Octets written : "+  len);

var buf2 = new Buffer('Simply Easy Learning');
var json = buf2.toJSON(buf2);
console.log(json);

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer1 content: " + buffer1.toString());
console.log("buffer2 content: " + buffer2.toString());
console.log("concatinate : " + buffer3.toString());

var result = buffer1.compare(buffer2);
console.log(result);
if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

