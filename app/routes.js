// require express
var express = require('express');
var path 	= require('path');


// create router object
var router = express.Router();

//export router
module.exports = router;

// route for home
router.get('/', function (req,res) {

	// res.sendFile(path.join(__dirname,'../index.ejs'));

	res.render('pages/home');
});

// route for about
router.get('/about', function(req,res){
	// res.sendFile(path.join(__dirname,'../about.ejs'));

var users = [
	{ name : 'Simon', email : 'ximonali@gmail.com', avatar: 'http://localhost/simongg/assets/img/simon-gonzalez.png' },
	{ name : 'Diana', email : 'diana@gmail.com', avatar: 'http://localhost/simongg/assets/img/simon-gonzalez.png' },
	{ name : 'Pedro', email : 'pedro@gmail.com', avatar: 'http://localhost/simongg/assets/img/simon-gonzalez.png' },
];

	res.render('pages/about', { users : users });
});


// route for contact
router.get('/contact', function (req,res) {
	var message = '';

	res.render('pages/contact', {message : message});	
});

router.post('/contact', function (req,res) {

	if (!req.body.name || !req.body.email || !req.body.pwd) {
		console.log('--- One or more Fields are Empty ! ---- ');
		message = 'Error -> All fields are required!';
		res.render('pages/contact', {message : message });
	}else {
		console.log('--- All Fields OK!:  ---- ' + req.body.name);
		message = 'Thanks for contacting us, ' + req.body.name + '! you will get an answer shortly';
		//res.send('Thanks for contacting us, ' + req.body.name + '! you will get an answer shortly');	
		res.render('pages/contact', {message : message });
	}




});


