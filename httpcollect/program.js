var http = require("http");
var bl = require("bl");
http.get(process.argv[2],function(response){
	response.pipe(bl(function(err,data){
		if(err)return console.error(err);
		var str = data.toString();
		console.info(str.length);
		console.info(str);
	}));
}).on("error",function(error){
	console.info(error);
});
