const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

var app = express();

var param = {
	key: fs.readFileSync('keys/key.pem'),
	cert: fs.readFileSync('keys/cert.pem')
}

var server = https.createServer(param,app);

app.use(bodyParser);

app.use(bodyParser.json());

app.use(express.static("public"));

server.listen(443,function(req,res){
	console.log('Server started...');
});

app.get('/',function(req,res){
	res.render('index.html');
});
