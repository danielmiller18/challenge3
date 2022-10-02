3// Assignment Code

// console.log(isNaN(10)) // false
// console.log(isNaN("abc")) // true

var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numberChar = "0123456789"
var specialChar = "!@#$%^&*()"

var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;


function checkLength() {
  passwordLength = prompt("Type the length for the password (in between 8 - 128) ")


  if (passwordLength < 8) {
    alert("Password length must in between 8 - 128")
    checkLength()
  }
  else if (passwordLength > 128) {
    alert("Password length must in between 8 - 128")
    checkLength()
  }
  // // if the input is not a number
  else if (isNaN(passwordLength)) {
    alert("Please enter a valid number!")
    checkLength()
  }

  else {
    alert("Please proceed")
  }

  return passwordLength
}


// checkLength()

// // function that will be used to check whether the user wants to include uppercase or not
function checkUppercase() {
  uppercaseCheck = prompt("Do you want to add uppercase letters in your password");

  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please Give a Yes/No")
    checkUppercase();
  }
  else if (uppercaseCheck === "yes") {
    uppercaseCheck = true;
    checkUppercase();
  }
  else if (uppercaseCheck === "no") {
    uppercaseCheck = false;
    checkUppercase();
  }
  else {
    alert("You can only write yes/no")
  }


  return uppercaseCheck
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
