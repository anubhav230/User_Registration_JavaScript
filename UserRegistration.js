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
        console.log("valid Mobile Number");
else
        console.log("Invalid Mobile Number");


const password1Regex = RegExp("^[0-9 a-z A-Z \! \@ \#\$\%\^\&\*]{8}$");
const password = "dh47jdf7"
if(password1Regex.test(password))
        console.log("valid password");
else
        console.log("Invalid password");

const password2Regex = RegExp("(?=.*[A-Z])[a-zA-Z]{8}");
const password2 = "Ahhjjddd"
if(password2Regex.test(password2))
        console.log("valid password");
else
        console.log("Invalid password");

const password3Regex = RegExp("(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8}");
const password3 = "Ahd5jddf"
if(password3Regex.test(password3))
        console.log("valid password");
else
        console.log("Invalid password");


const password4Regex = RegExp("((?=.*[A-Z])(?=.*\\d)(?=.*[#$@]){1}.{8})$");
const password4 = "Ah@@4ddf"
if(password4Regex.test(password4))
        console.log("valid password");
else
        console.log("Invalid password");
