var dir = process.argv[2];
var ext = process.argv[3];
var path = require("path");
var fs = require("fs");
fs.readdir(dir,function(err,files){
	if (err)console.info("ERROR");
	for(var i = 0;i<files.length;i++){
		if(path.extname(files[i])=="."+ext){
			console.info(files[i]);
		}		
	}
});
