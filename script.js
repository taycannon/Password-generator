// Assignment Code
var generateBtn = document.querySelector("#generate");

//Created userChoice, lowercase, uppercase, numeric, special characters
var userChoice = [];
let finalPassword = [];

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIGKLMNOPQRSTUVWXYZ";
var numeric = "123456789";
var specialChars = "!#@_?";

// Written the password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
//Added arrays under generate password to have in the password
userChoice = []
finalPassword = []

//Prompt and condition of password length
let passwordLength = prompt('Please provide a minimum length of 8 and a maximum length of 128 for your generated password');
console.log('password length --> ', passwordLength);
if(passwordLength < 8 || passwordLength > 128){

// alerts users to try again and did not finish condition
alert(['Please provide the requested length between 8 and 128 requirement.']);
//Added '' to reture because of empty string
return '';
}
else {
//Lowercase Code
var includelowerCase = confirm("Would you like Lowercase letters?");
if(includelowerCase){
//push means to add new items at the end of a array
userChoice.push(...lowerCase)
}

//Uppercase Code
var includeupperCase = confirm("Would you like Uppercase letters?");
if(includeupperCase) {
userChoice.push(...upperCase)
}

//Numeric Code
var includenumeric = confirm("Would you like to add numbers?");
if(includenumeric){
  userChoice.push(...numeric)
}

//Special Characters Code
var includespecialChars = confirm("Would you like to add Special Characters?")
if(includespecialChars) {
  userChoice.push(...specialChars)
}


console.log('user choice array --> ', userChoice);

if(userChoice.length === 0){
  alert("Please choose one character type.")
  return '';
}

//This is the loop
for (let i = 0; i < passwordLength; i++) {
//Math floor brings any numbers that is lower numbers & random gives a random reponse
finalPassword.push(userChoice[Math.floor(Math.random() * userChoice.length)])
console.log('finalPassword --> ', finalPassword);
}
//Removes commas from answer and is "one word" and makes it a string
return finalPassword.join('');
}
}
