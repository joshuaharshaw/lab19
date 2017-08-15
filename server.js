var movieQuotes = require('./quotes');
var http = require('http');

var randomResponse;

http.createServer(function(request, response) {
  response.writeHead(200, { "Content-type": "text/html" });
  randomResponse = quoteMe();
  response.write("<h1>" + randomResponse + "</h1>");
  response.end();
}).listen(8080);


function quoteMe () {
	var randomQuote = movieQuotes.quotes[Math.floor(Math.random() * movieQuotes.quotes.length)];
	return randomQuote;
}