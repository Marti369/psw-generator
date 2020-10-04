// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
    var newpassword = generatePassword();
    var passwordUnique = document.querySelector("#password");

    passwordUnique.value = newpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);