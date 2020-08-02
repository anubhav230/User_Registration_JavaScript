const regexa = RegExp("^[A-Z]{1}[A-Za-z]{2}");

const fName = "Anubhav"

if(regexa.test(fName))
	console.log("true");
else
	console.log("false");

