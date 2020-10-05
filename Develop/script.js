// Assignment Code
var generateBtn = document.querySelector("#generate");


//generation of possible passwords
// generate a random lower case letter
var lowerLetter = function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//generate a random upper case letter
var upperLetter = function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//generate a random number
var numRandom = function() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//generate a random sysmbols
var symRandom = function() {
    var symbol = "!@#$%^&*()[]{}=<>/:";
    return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(upperLetter());
console.log(lowerLetter());
console.log(symRandom());
console.log(numRandom());


// Write password to the #password input
function writePassword() {
    var newpassword = generatePassword();
    var passwordUnique = document.querySelector("#password");

    passwordUnique.value = newpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);