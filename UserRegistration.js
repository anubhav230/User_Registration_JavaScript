
const userInput = require('prompt-sync')();
const firstNameregex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const fName = userInput("Enter first Name: ");
if(firstNameregex.test(fName))
	console.log("valid First Name");
else
	console.log("Invalid First Name");

const lastNameregex = RegExp("^[A-Z]{1}[A-Za-z]{2}");
const lastName = userInput("Enter last Name: ");
if(lastNameregex.test(lastName))
        console.log("valid Last Name");
else
        console.log("Invalid Last Name");

const mailregex = RegExp("^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$");
const mail = userInput("Enter mail: ");
if(mailregex.test(mail))
        console.log("valid mail");
else
        console.log("Invalid mail");


const regex = RegExp("^[1-9]{2,5}[\ ]{1}[1-9]{1}[0-9]{9}$");
const mobileNumber = userInput("Enter mobile number: ");
if(regex.test(mobileNumber))
        console.log("valid Mobile Number");
else
        console.log("Invalid Mobile Number");


const password1Regex = RegExp("^[0-9 a-z A-Z \! \@ \#\$\%\^\&\*]{8}$");
const password = userInput("Enter password 1: ");
if(password1Regex.test(password))
        console.log("valid password");
else
        console.log("Invalid password");

const password2Regex = RegExp("(?=.*[A-Z])[a-zA-Z]{8}");
const password2 = userInput("Enter password 2: ");
if(password2Regex.test(password2))
        console.log("valid password");
else
        console.log("Invalid password");

const password3Regex = RegExp("(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8}");
const password3 = userInput("Enter password 3: ");
if(password3Regex.test(password3))
        console.log("valid password");
else
        console.log("Invalid password");


const password4Regex = RegExp("((?=.*[A-Z])(?=.*\\d)(?=.*[#$@]){1}.{8})$");
const password4 = userInput("Enter parrword 4: ");
if(password4Regex.test(password4))
        console.log("valid password");
else
        console.log("Invalid password");
