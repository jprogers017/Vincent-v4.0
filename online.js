const http = require('http');

http.createServer(function (req, res) {
	res.write("I'm currently online!");
	res.end();
}).listen(8080);