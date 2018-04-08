var express = require('express');
var mySql = require('mySql');

var app = express();

var dataList = { "1":{id:1,name:"test"},"2":{id:2,name:"test"}}

app.get('/info', function(req, res){
	res.set({'Content-Type':'text/json','Encodeing':'utf8'});
	res.send(dataList)
})

app.listen(8888);