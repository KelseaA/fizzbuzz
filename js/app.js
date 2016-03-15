$(document).ready(function(){
	var userFeedback = prompt("Choose a number between 1 and 100");
	var userNumber = parseInt(userFeedback);
	if (isInt(userNumber) == true){
		fizzBuzz(userNumber);
	}
	else{
		alert("Please pick a number between 1 and 100");
	}
})
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}
function fizzBuzz (limit){
	for (var i = 1; i <= limit; i++){
		if(i % 15 == 0){
			console.log("fizz buzz");
			$('body').append("<p>fizz buzz</p>");
		}
		else if (i % 5 == 0){
			console.log("buzz");
			$('body').append("<p>buzz</p>");
		}
		else if (i % 3 == 0){
			console.log("fizz");
			$('body').append("<p>fizz</p>");
		}
		else{
			console.log(i);
			$('body').append("<p>" + i + "</p>");
		}
	}
}