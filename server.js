var express = require('express')
var fs = require("fs")
var app = express()
var config = require('./config')
var root = config.PUBLIC_DIR

app.use('/react', express.static(root + '/react'));
app.use('/static', express.static(root + '/static'));

var files = fs.readdirSync(root + '/html');

app.get('/', function(req, res) {
	res.sendFile(root + '/html/index.html');
});

for (var i in files){
	var splited = files[i].split('.')
	var extension = splited.pop();
	var fileName = splited.pop();
	if (extension == 'html') {
		app.get('/' + fileName, function(req, res) {
            res.sendFile(root + '/html/' + files[i]);
        });
	}
}

app.use(function(req, res, next){
	res.status(404);
	
	if (req.accepts('html')) {
		res.send('404')
		return;
	}

	if (req.accepts('json')) {
		res.send({ error: 'Not found' });
		return;
	}

	res.type('txt').send('Not found');
});

app.listen(config.port)
