var mymodule = require("./mymodule");
mymodule(process.argv[2],process.argv[3],function(err,files){
	if(err){
		console.info("ERROR");
		return;
	}
	for(var i = 0;i<files.length;i++){
		console.info(files[i]);
	}	
});
