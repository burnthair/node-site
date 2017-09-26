// // import http module
// var http = require('http');
//
// // handle sending requests and returning responses
// function handleRequests(req, res) {
//   // return string
//   res.end('Hello world!');
// }
//
// // create the server
// var server = http.createServer(handleRequests);
//
// // start the server and listen on port x
// server.listen(8080, function() {
//   console.log('Listening on port 8080');
// });

////////////////////// EXPRESS ///////////////////////
// require dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);

//route our app
var router = require('./app/routes');
app.use('/', router);

// set static files (css, img, etc)
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function() {
  console.log('app started');
});
