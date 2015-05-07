$(document).ready(function(){
var user;
var passwd;

$('#submit').on('click', function() {
	user = $("#user").val();
	password = $("#password").val();
	$.post("http://localhost:3000/login",{user:user,password:password}, function(data){
		if(data==='done'){
			alert("login successfull");
		}
	});

});

});