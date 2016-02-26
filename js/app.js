for (var i = 1; i <= 100; i++){
	if(i % 3 == 0 && i % 5 == 0){
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