// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

<<<<<<< HEAD
function validChoice(numMin, numMax) {
  var numChoice = parseInt(prompt("How LONG do you want the password to be? "+numMin+"-"+numMax), 10);

  numGood = Number.isInteger(parseInt(numChoice, 10));
  console.log(numGood);
  
  while (numChoice < numMin || numChoice > numMax || !numGood) {
    var errMessage = "";
    if (numChoice < numMin) {errMessage=errMessage.concat("is too small, needs to be at least "+numMin);}
    if (numChoice > numMax) {errMessage=errMessage.concat("is too large, must not be longer than "+numMax);}
    if (!numGood) {errMessage=errMessage.concat("Not A Number.");}
    console.log(errMessage);
    numChoice = parseInt(prompt(numChoice + ": "+errMessage+"; How LONG do you want the password to be?"), 10);
    numGood = Number.isInteger(parseInt(numChoice, 10));
  }
  return numChoice;
}

function generatePassword(){
  //TODO: your code here
  var myPass = "";
  var myStrCaps ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var myStrLower = "abcdefghijklmnopqrstuvwxyz";
  var myStrNum = "0123456789";
  var myStrSymb = "!@#$%^&*?*+-";
  var myStrChoice = "";

  var myChoice = confirm("Press OK if you want UPPER case letters?");
  if (myChoice) {myStrChoice += myStrCaps;}
  myChoice = confirm("Press OK if you want LOWER case letters?");
  if (myChoice) {myStrChoice += myStrLower;}
  myChoice = confirm("Press OK if you want NUMBERS?");
  if (myChoice) {myStrChoice += myStrNum;}
  myChoice = confirm("Press OK if you want SYMBOLS?");
  if (myChoice) {myStrChoice += myStrSymb;}

  //error checking function to get a valid length number, variables choose acceptable range
  myChoice = validChoice(8,128);

  for (var i=1; i <= myChoice; i++) {
    var charPass = Math.floor(Math.random()* myStrChoice.length + 1);
    myPass += myStrChoice.charAt(charPass);
  }
  return myPass;
=======
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
>>>>>>> cbed9422978867047bb377df0710537c7a43f76e
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
