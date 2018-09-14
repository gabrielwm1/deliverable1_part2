//exercise 1

var total= 0;

var num = prompt("pick a number:");

for (var i=0; i < num; i++){
	total= num - i + total;
	}
	
console.log("Output:");
console.log(total);

//exercise 2



var start = prompt("do you want to play:");
	
	var wholestring = new Array();
	
	if (start == "yes") {
		
	
		do {
		
		//var i = 0;
		
		var addword = prompt("Enter a word");
		
		
		wholestring.push(addword);
		
		//store it in a string
		
		var playagain = prompt ("Do you want to play again");
		
		} while (playagain == "yes"); 
		
		console.log(wholestring);
		}

		
		
//exercise 3
		
var firstanswer = prompt("Would you like to print your name?");
var answer = firstanswer;
var counter = "!";
var points = new Array();

if (answer == "yes"){

while (answer == "yes"){
	var name = prompt("What is your name?");
	
	
	
	points.push(counter);
	
    console.log("Helly. My name is " + name + points.join(""));
	
	answer = prompt("would you like to print your name?");
	
	}
}

//exercise 4

var timeday = prompt ("what time of day is it?");

if (timeday= "morning"){
	console.log("since it is morning, you should be eating breakfast. We suggest eggs and toast.")
}

else if (timeday = "noon") {
	console.log("since it is noon, you should be eating lunch. We suggest a salad.")
}

else if (timeday = "evening") {
	console.log("since it is evening, you shoud be eating dinner. We suggest chicken and rice.")
}
else {
}


		
		
		

	

