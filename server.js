var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(requst,response){
	response.sendfile("index.html");
})''

app.listen(3000, function(){
	console.log("Server strted on port 3000");
});
