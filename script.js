var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]

function getPasswordLength () {
  var passwordLengthNumber = prompt("How many characters would you like your password to be?  Enter a number between 8 and 128.");
  if (passwordLengthNumber >= 8 && passwordLengthNumber <= 128) {
    return passwordLengthNumber
  } else {
    alert ("Please enter a valid number.");
    return getPasswordLength();
  }
}

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

  return userOptions
}

function createRandom(length) {
  var randomPassword = Math.floor(Math.random() * length)
  return randomPassword;
}

function generatePassword() {
  var userOptions = criteria()
  var availChars = [];
  var passwordArray = [];
  if(userOptions.numberChoice) {
    availChars = availChars.concat(numbers);
  };

  if(userOptions.lcLetterChoice) {
    availChars = availChars.concat(lcLetters);
  }

  if(userOptions.ucLetterChoice) {
    availChars = availChars.concat(ucLetters);
  }

  if(userOptions.specialCharacterChoice) {
    availChars = availChars.concat(specialCharacters);
  }

  for(var i = 0; i < userOptions.passwordLength; i++) {
    passwordArray.push(availChars[createRandom(availChars.length)])
  }

  return passwordArray.join("")


}

// Write password to the #password input
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// if (choseNumbers) && (The string of passwordChoice contains [a number]){
//  else change [1] to number[2]
// }
// if (choselcletters) && (The string of passwordChoice contains [a lcletter]){
//   else change [2] to lcLetter[3]
//  }