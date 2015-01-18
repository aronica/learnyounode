var path = require("path");
var fs = require("fs");
module.exports = function(dir,ext,callback){
	fs.readdir(dir,function(err,files){
		if(err){
			return callback(err);
		}
		var arr = [];
		for(var i = 0;i<files.length;i++){
			if(path.extname(files[i])=="."+ext){
				arr.push(files[i]);
			}		
		}
		callback(err,arr);
	});
}
