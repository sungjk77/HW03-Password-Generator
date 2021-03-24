// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //TODO: your code here
var myPass = "";
var myStrCaps ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var myStrLower = "abcdefghijklmnopqrstuvwxyz";
var myStrNum = "0123456789";
var myStrSymb = "!@#$%^&*?*+-";
var myStrChoice = "";

var myChoice = prompt("Do you want UPPER case letters?");
if (myChoice == "y" || myChoice == "Y") {myChoice = true;} else {myChoice = false;}
if (myChoice) {myStrChoice += myStrCaps;}

var myChoice = prompt("Do you want LOWER case letters?");
if (myChoice == "y" || myChoice == "Y") {myChoice = true;} else {myChoice = false;}
if (myChoice) {myStrChoice += myStrLower;}

var myChoice = prompt("Do you want NUMBERS?");
if (myChoice == "y" || myChoice == "Y") {myChoice = true;} else {myChoice = false;}
if (myChoice) {myStrChoice += myStrNum;}

var myChoice = prompt("Do you want SYMBOLS?");
if (myChoice == "y" || myChoice == "Y") {myChoice = true;} else {myChoice = false;}
if (myChoice) {myStrChoice += myStrSymb;}

var myChoice = prompt("How LONG do you want the password to be?");
if (myChoice > 8 && myChoice <=128) {
  //good choice
} else {myChoice = 8;}
console.log(myStrChoice);

for (i=1; i <= myChoice; i++) {
  var charPass = Math.floor(Math.random()* myStrChoice.length + 1);
  myPass += myStrChoice.charAt(charPass);
}
return myPass;
}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
