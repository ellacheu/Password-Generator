// Assignment code here
// Prompts for password criteria
function generatePassword() {

  var passwordLength = prompt("Length of Password (8 min. - 128 max. Characters)")
  var includeLowercase = confirm("Include Lowercase Characters?")
  var includeUppercase = confirm("Include Uppercase Characters?")
  var includeNumeric = confirm("Include Numerics?")
  var includeSpecial = confirm("Include Special Characters?")
  
  // constant variable set for each criteria
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numericChar = "0123456789";
  const specialChar = "!@#$%^&*()_+[]{}|;:,.<>?";
  
  // alert if input doesn't contain an values
  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return;
  
  // 
  
   
  
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
  