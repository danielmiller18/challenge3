var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var numberChar = "0123456789"
var specialChar = "!@#$%^&*()-+?_"

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

  else if (isNaN(passwordLength)) {
    alert("Please enter a valid number!")
    checkLength()
  }

  else {
    alert("Please proceed")
  }

  return passwordLength
}

function checkUppercase() {
  uppercaseCheck = prompt("Do you want to add uppercase letters in your password? (yes/no)");

  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please Give a Yes/No")
    checkUppercase();
  }
  else if (uppercaseCheck === "yes") {
    uppercaseCheck = true;
    return uppercaseCheck;
  }
  else if (uppercaseCheck === "no") {
    uppercaseCheck = false;
    return uppercaseCheck;

  }
  else {
    alert("You can only write yes/no")
  }


  return uppercaseCheck
}

function checkNumber() {
  numberCheck = prompt("Do you want to include the numbers in your password? (yes/no)");

  if (numberCheck === null || numberCheck === "") {
    alert("Please Give a Yes/No")
    checkNumber();
  }
  else if (numberCheck === "yes") {
    numberCheck = true;
   return numberCheck
  }
  else if (numberCheck === "no") {
    numberCheck = false;
    return numberCheck
   
  }
  else {
    alert("You can only write yes/no")
  }


  return numberCheck
}

function checkSpecial() {
  specialCheck = prompt("Do you want to add special characters in your password? (yes/no)");

  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please Give a Yes/No")
    checkSpecial();
  }
  else if (specialCheck === "yes") {
    specialCheck = true;
    return specialCheck
  }
  else if (specialCheck === "no") {
    specialCheck = false;
    return specialCheck
    
  }
  else {
    alert("You can only write yes/no")
  }


  return specialCheck
} 

function generatePassword(){
    checkLength();
    console.log(passwordLength);

    checkUppercase()
    console.log(uppercaseCheck)

    checkNumber()
    console.log(numberCheck)

    checkSpecial()
    console.log(specialCheck)

   

    var characters = lowercaseChar;
    var password = ""

    if(uppercaseCheck && numberCheck && specialCheck){
      characters += uppercaseChar + numberChar + specialChar;
    } else if(uppercaseCheck && numberCheck){
      characters += uppercaseChar + numberChar;
    } else if(numberCheck && specialCheck){
      characters += uppercaseChar + numberChar;
    }
    else if(uppercaseCheck && specialCheck){
      characters += uppercaseChar + specialChar
    } else if(uppercaseCheck){
      characters += uppercaseChar;
    } else if(numberCheck){
      characters += numberChar
    } else if(specialCheck){
        characters += specialChar
    }
    else {
      characters === lowercaseChar;
    }


    for(var i = 0; i < passwordLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
