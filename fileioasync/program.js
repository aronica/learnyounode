var fs = require("fs");
fs.readFile(process.argv[2],"utf8",function(error,content){
	if (error)console.info("Error");	
	var len = content.split("\n").length-1;
	console.info(len);
});
