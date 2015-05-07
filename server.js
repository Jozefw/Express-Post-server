var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(request,response){
	response.sendfile("./index.html");
});

app.post('/login',function(request,response){
	var user_name=request.body.user;
	var password=request.body.password;
	console.log(user_name +' '+ password);
	response.end("yes");
});

app.listen(3000, function(){
	console.log("Server strted on port 3000");
});
