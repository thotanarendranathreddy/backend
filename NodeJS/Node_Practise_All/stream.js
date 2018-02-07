console.log( __filename );
var fs=require('fs');
var zlib=require('zlib');


 
     fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('input.txt'));
 
     console.log("File Decompressed.");


console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});

