
var fs = require('fs');
var extension = process.argv[3];

 fs.readdir(process.argv[2], function(err, list){
	 if (err) 
		throw err;
	 for(var i =0; i<list.length; i++)
	 {
		var lastIndexOfDot = list[i].lastIndexOf(".");
		if(extension != list[i] && extension == list[i].substr(lastIndexOfDot+1))
			console.log(list[i]);
	 }
 });