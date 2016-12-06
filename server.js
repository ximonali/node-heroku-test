/////////// With Express /////////

// require our dependencies
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

//use ejs and express Layouts
app.set('view engine','ejs');
app.use(expressLayouts);

//user body parser
// app.use(bodyParser.urlencoded());

app.use(bodyParser.urlencoded({ extended: true }));

// router app
var router = require('./app/routes');
app.use('/', router);


//set static files (css,img,etc) location
app.use(express.static(__dirname + '/public'));

// start the server
app.listen(port, function () {
	// body...
	console.log('App Started, Server runing on port: 8080');
});

