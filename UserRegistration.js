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

const mailregex = RegExp("^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$");
const mail = "anubhavsingh230@gmail.abc.com"
if(mailregex.test(mail))
        console.log("valid mail");
else
        console.log("Invalid mail");


const regex = RegExp("^[1-9]{2,5}[\ ]{1}[1-9]{1}[0-9]{9}$");
const mobileNumber = "91 9885616725"
if(regex.test(mobileNumber))
        console.log("valid Last Name");
else
        console.log("Invalid Last Name");

