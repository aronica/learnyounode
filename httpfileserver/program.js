var http = require("http");
var fs = require("fs");
var http = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	var read = fs.createReadStream(process.argv[3]).pipe(res);
});
http.listen(process.argv[2]);
