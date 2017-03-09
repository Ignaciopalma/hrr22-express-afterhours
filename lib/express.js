var bodyParser = require('body-parser');
var express = require('express');
var routes = require('../routes');

var app = express();

app.locals.config = {};
app.locals.language = 'en';

app.use(function(req, res, next){
	var startTime = new Date();
	var endTime;

	var oldSend = res.send;

	res.send = function () {
		endTime = new Date();
		console.log('Your request took ' + (endTime - startTime) + 'ms.');
		console.log('It was a ' + req.method + ' request.');
		oldSend.apply(this, arguments);
	};

	next();
});

app.use(function (err, req, res, next) {
	console.error(err);
	// notifies the dev team
	// pages the old school pager from the 90s

	res.status(500).send('The server had an error. Don\'t try again.');
})

app.use(function (req, res, next) {
	if(contentType === 'json') {
		var data = '';
		req.on('data', function (chunk) { data += chunk });
		req.on('end', function() {
			req.body = JSON.parse(data);
			next();
		})
	} else {
		next();
	}
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

routes(app);

module.exports = app;