const firstNameregex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const fName = "Anubhav"
if(firstNameregex.test(fName))
	console.log("valid First Name");
else
	console.log("Invalid First Name");

const lastNameregex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const lastName = "Singh"
if(lastNameregex.test(lastName))
        console.log("valid Last Name");
else
        console.log("Invalid Last Name");
