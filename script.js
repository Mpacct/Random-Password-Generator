// assigned array of possible numbers to number variable
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// assigned array of possible lower case letters to lower case letter variable
var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// assigned array of possible upper case letters to uppercase letter variable
var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// assigned array of possible special characters to special characters variable
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]

// makes user enter a valid number length for their password
function getPasswordLength () {
  var passwordLengthNumber = prompt("How many characters would you like your password to be?  Enter a number between 8 and 128.");
  if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
    return passwordLengthNumber
  } else {
    alert ("Please enter a valid number.");
    return getPasswordLength();
  }
}
// adds prompts for users to select which types of characters they want in their password.  Calls "getPasswordLength" function.  Stores boolean values in an object names "userOptions".
function criteria() {
  var passwordLengthNumber = getPasswordLength ()
  var choseNumbers = confirm("Would you like numbers in your password?");
  var choseLcLetters = confirm("Would you like lowercase letters in your password?");
  var choseUcLetters = confirm("Would you like uppercase letters in your password?");
  var choseSpecialCharacters = confirm("Would you like special characters in your password?");
  var userOptions = {
    numberChoice: choseNumbers,
    lcLetterChoice: choseLcLetters,
    ucLetterChoice: choseUcLetters,
    specialCharacterChoice: choseSpecialCharacters,
    passwordLength: passwordLengthNumber,
  };

  return userOptions;
}
// creates function to generate a random number, based on the length given in the argument
function createRandom(length) {
  var randomPassword = Math.floor(Math.random() * length);
  return randomPassword;
};
// function to generate the users password based on their selected criteria.
function generatePassword() {
  var userOptions = criteria();
  var availChars = [];
  var passwordArray = [];
  // adds the "numbers" array to the list of available characters for the password if user selected yes to having numbers
  if(userOptions.numberChoice) {
    availChars = availChars.concat(numbers);
  };
  // adds the "lcLetters" array to the list of available characters for the password if user selected yes to having lower case letters
  if(userOptions.lcLetterChoice) {
    availChars = availChars.concat(lcLetters);
  };
  // adds the "ucLetters" array to the list of available characters for the password if user selected yes to having upper case letters
  if(userOptions.ucLetterChoice) {
    availChars = availChars.concat(ucLetters);
  };
  // adds the "specialCharacters" array to the list of available characters for the password if user selected yes to having special characters
  if(userOptions.specialCharacterChoice) {
    availChars = availChars.concat(specialCharacters);
  };
// generates a password by selecting a random character from the total group of available characters, based on the length selected above by the user
  for(var i = 0; i < userOptions.passwordLength; i++) {
    passwordArray.push(availChars[createRandom(availChars.length)])
  };
// sends password Array to function "replaceCharacters" to check to ensure it has one of each type of character
  passwordArray = replaceCharacters(userOptions, passwordArray);
// returns passwordArray as final generated password to "writePassword" function
  return passwordArray.join("");

};
// Function that loops a number of times based on the size of the object of user criteria; checking if the generated password has one of each of the user selected criteria.  Loops to ensure still has all criteria after potentially replacing characters.
function replaceCharacters (userOptions, passwordArray) {
  for(var i = 0; i < Object.keys(userOptions).length - 1; i++) {
    if (passwordArray.some(r=> numbers.includes(r))) {
    
    }  else if (userOptions.numberChoice) {
        passwordArray.splice(0, 1, numbers[createRandom(numbers.length)])
    };
    
    if (passwordArray.some(r=> lcLetters.includes(r))) {
    
    }  else if (userOptions.lcLetterChoice) {
        passwordArray.splice(1, 1, lcLetters[createRandom(lcLetters.length)])
    };

    if (passwordArray.some(r=> ucLetters.includes(r))) {
      
    }  else if (userOptions.ucLetterChoice) {
        passwordArray.splice(2, 1, ucLetters[createRandom(ucLetters.length)])
    };

    if (passwordArray.some(r=> specialCharacters.includes(r))) {
      
    }  else if (userOptions.specialCharacterChoice) {
        passwordArray.splice(3, 1, specialCharacters[createRandom(specialCharacters.length)])
    };
  };
  // returns passwordArray back to "generatePassword" function
  return passwordArray;
};




// Write password to the #password input
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);