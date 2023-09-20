// Assignment code here
// Prompts for password criteria

  var passwordLength = prompt("Length of Password (8 min. - 128 max.)");
  var includeLowercase = confirm("Include Lowercase Characters?");
  var includeUppercase = confirm("Include Uppercase Characters?");
  var includeNumeric = confirm("Include Numbers?");
  var includeSpecial = confirm("Include Special Characters?");


  // constant variable set for each criteria
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!@#$%^&*()_+[]{}|;:,.<>?";

  // validate input statements



  // // Combined outcomes based on selected criteria
  let allChars = "";
  if (lowerCase) allChars += lowerCase;
  if (upperCase) allChars += upperCase;
  if (numericChar) allChars += numericChar;
  if (specialChar) allChars += specialChar;

  console.log(allChars);

// alerts for invalid inputs and for loop for randomIndex
function generatePassword() {
  if (!includeUppercase && !includeLowercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return;
  }
  let password = "";
  for (let i=0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
  }  
}  

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  