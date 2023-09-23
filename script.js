// variables for password
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChar = "0123456789";
  var specialChar = "!@#$%^&*()_+[]{}|;:,.<>?";

function generatePassword() { 
  var passwordLength = parseInt(prompt("Length of Password (8 min. - 128 max.)"));
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Length of Password (8 min. - 128 max.)"));
  }
  var includeLowercase = confirm("Include Lowercase Characters?");
  var includeUppercase = confirm("Include Uppercase Characters?");
  var includeNumeric = confirm("Include Numbers?");
  var includeSpecial = confirm("Include Special Characters?");

  // generate random characters based on selected password criteria
 let generatePassword = "";
  let allChars = "";
  if (includeLowercase) {
    allChars += lowerCase; 
    generatePassword += allChars [Math.floor(Math.random() * lowerCase.length)];
  }
  if (includeUppercase) {
  allChars += upperCase; 
  generatePassword += allChars [Math.floor(Math.random() * upperCase.length)];
}
  if (includeNumeric) {
     allChars += numericChar;
    generatePassword += allChars [Math.floor(Math.random() * numericChar.length)];
  }
  if (includeSpecial) {
    allChars += specialChar;
    generatePassword += allChars [Math.floor(Math.random() * specialChar.length)];
  }
  console.log(allChars);
  
  // if insufficient characters aren't selected 
  if (!includeUppercase && !includeLowercase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type.");
    return;
  }
  // for loop to generate password 
  for (let i = generatePassword.length; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatePassword += allChars [randomIndex];
  }    
  return generatePassword;
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
  