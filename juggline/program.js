var http = require("http");
var bl = require("bl");
var queue = [1,2,3];
var cumulative = 0;
callback(process.argv[2],0);
callback(process.argv[3],1);
callback(process.argv[4],2);

function callback(url,index){
http.get(url,function(response){
	response.pipe(bl(function(err,data){
		if(err)return console.error(err);
		cumulative += 1;
		queue[index] = data.toString();
		if (cumulative == 3){
			for(var j = 0;j<3;j++)console.info(queue[j]);
		}
	}));
});

}
