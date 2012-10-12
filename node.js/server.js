// reference the http module so we can create a webserver
var http = require("http");

// create a server
http.createServer(function(req, res) {
    // on every request we'll output 'Hello world'
    res.end("Hello world from Cloud9!");
}).listen(process.env.PORT, process.env.IP);

// when spawning a server listen on the PORT and IP environment variables

// click the 'Run' button on the top to start your server,
// then click the URL that is emitted to the Output window