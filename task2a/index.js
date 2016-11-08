var express = require('express');
var app = express();
var a = 0;
var b = 0;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://account.skill-branch.ru");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
	a = parseInt(req.query.a,10);
	b = parseInt(req.query.b,10);
	if (isNaN(a)) a=0;
	if (isNaN(b)) b=0;
	//var c= a+b;
	res.send(String(a+b));
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});