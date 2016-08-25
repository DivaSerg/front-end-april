"use strict";

var webSocketsServerPort = 4500;

var http = require('http');
var url = require("url");
var st = require('node-static');

var fileServer = new st.Server('./');


/**
 * HTTP server
 */
var server = http.createServer(function(request, response) {
	var _get = url.parse(request.url, true).query; 
	fileServer.serve(request, response);
});
server.listen(webSocketsServerPort, function() {
    console.log((new Date()) + " Server is listening on port " + webSocketsServerPort);
});