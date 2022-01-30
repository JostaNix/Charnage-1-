var http = require("http");
http.createServer(function(req, res){
res.write("Charnage"); 
res.end();
}).listen(8080);