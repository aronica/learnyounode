var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
	var q = url.parse(req.url,true);
	var time = new Date(q.query["iso"]);
	if (q.pathname=="/api/parsetime"){
		res.writeHead(200,{"Content-Type":"application/json"});
		var time = new Date(q.query["iso"]);
		res.end(JSON.stringify({'hour':time.getHours(),'minute':time.getMinutes(),'second':time.getSeconds()}));
	}else if(q.pathname=="/api/unixtime"){
		res.writeHead(200,{"Content-Type":"application/json"});
		res.end(JSON.stringify({"unixtime":time.getTime()}));
	}else{
		res.writeHead(404);
		res.end();
	}
});
server.listen(process.argv[2]);
