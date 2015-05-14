function outputbirth() {
	// Getting the form id "birth"
	var x = document.getElementById("birth");
	var text = "";
	// Getting the users input values of Month, Day, Year.
	for (i = 0; i < x.length; i++) {
		text += x.elements[i].value + " ";


	}
	// This is going to print out the result on output id in the html document 
	document.getElementById("output").innerHTML = "Your birth was on " + text + "(MM/DD/YYYY)";

}

function submitBday() {
	// Gets the current date, time and the value of user inputs from the form
	var now = Date.now(), x = document.getElementById("birth"), bDay = "", start, elapsed, age;

  	for (i = 0; i < x.length; i++) {
    	bDay += x.elements[i].value + ","; 
  	}

  	start = new Date(bDay);

  	elapsed =  now - start;
  	age = Math.floor(((((elapsed / 1000) / 60) / 60) /24) / 365);
  	document.getElementById("age").innerHTML = "You are " + age + " years old.";

}
document.body.style.margin = "0px";

document.getElementById("birth").style.backgroundColor = "black";
document.getElementById("birth").style.width = "500px";
document.getElementById("birth").style.height = "200px";
document.getElementById("birth").style.margin = "0px auto";



// Styling for birthMonth text and input
document.getElementById("bM").style.color = "white";
document.getElementById("bM").style.fontSize = "small";
document.getElementById("bM").style.width = "250px";
document.getElementById("bM").style.height = "40px";
document.getElementById("bM").style.margin = "0px auto";
document.getElementById("birthMon").style.width = "auto";
document.getElementById("birthMon").style.height = "auto";
document.getElementById("birthMon").style.margin = "0px 125px";




// Styling for birthDay text and input
document.getElementById("bD").style.color = "white";
document.getElementById("bD").style.fontSize = "small";
document.getElementById("bD").style.width = "250px";
document.getElementById("bD").style.height = "40px";
document.getElementById("bD").style.margin = "0px auto";
document.getElementById("birthDa").style.width = "auto";
document.getElementById("birthDa").style.height = "auto";
document.getElementById("birthDa").style.margin = "0px 125px";

// Styling for birthYear text and input
document.getElementById("bY").style.color = "white";
document.getElementById("bY").style.fontSize = "small";
document.getElementById("bY").style.width = "250px";
document.getElementById("bY").style.height = "40px";
document.getElementById("bY").style.margin = "0px auto";
document.getElementById("birthYe").style.width = "auto";
document.getElementById("birthYe").style.height = "auto";
document.getElementById("birthYe").style.margin = "0px 125px";

// Styling for btAction output and age
document.getElementById("btnAction").style.width = "150px";
document.getElementById("btnAction").style.height = "40px";
document.getElementById("btnAction").style.margin = "20px auto";



document.getElementById("output").style.width = "200px";
document.getElementById("output").style.height = "40px";
document.getElementById("output").style.margin = "0px auto";

document.getElementById("age").style.width = "200px";
document.getElementById("age").style.height = "40px";
document.getElementById("age").style.margin = "0px auto";



