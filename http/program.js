var http = require("http");
http.get(process.argv[2],function(response){
	response.setEncoding("utf8");
	response.on("data",function(data){
		console.info(data);
	});
	response.on("end",function(){
	})
}).on("error",function(error){
	console.info(error);
});
