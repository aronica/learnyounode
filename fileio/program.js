var fs = require("fs");
var content = fs.readFileSync(process.argv[2]).toString();
var arr = content.split("\n");
console.info(arr.length-1);
