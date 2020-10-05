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


//add questions to ask the user options

//question prompt to ask how many characters
var responseLengthPsw = function() {
    lengthPsw = window.prompt("How many Characters would you like your password to be? Please enter from 8 to 128.");
    if (lengthPsw > 7 && lengthPsw < 129) {
        alert("You have chosen " + lengthPsw + " characters");
    } else {
        alert("Please enter a valid option. Choose from 8 to 128.");
        responseLengthPsw();
    }
};

// ask if password needs number characters
var responseNumberAsk = function() {
    numberAsk = window.confirm("Would you like your password to contain Numbers? Click OK for Yes, Cancel for No");
    if (numberAsk === true) {
        window.alert("Your password will contain number characters");
    } else {
        window.alert("Your password will not contain number characters.")
    }
};

// ask if password need upper case
var responseUpperCase = function() {
    upperCase = window.confirm("Would you like Upper Case letters in you password? Click OK for Yes, Cancel for No.");
    if (upperCase === true) {
        window.alert("Your password will have upper case letters");
    } else {
        window.alert("Your password will not contain upper case letters.")
    }
};

// ask if password needs symbol characters
var responseSymbolAsk = function() {
    symbolAsk = window.confirm("Would you like your password to contain Symbols? Click OK for Yes, Cancel for No");
    if (symbolAsk === true) {
        window.alert("Your password will contain symbol characters");
    } else {
        window.alert("Your password will not contain symbol characters.")
    }
};

//ask if password needs lower case
var responseLowerCase = function() {
    lowerCase = window.confirm("Would you like Lower Case letters in you password? Click OK for Yes, Cancel for No.");
    if (lowerCase === true) {
        window.alert("Your password will have Lower case letters");
    } else {
        window.alert("Your password will not contain lower case letters.")
    }
};





// calling the question functions to test the functions work
responseLengthPsw();
responseLowerCase();
responseNumberAsk();
responseUpperCase();
responseSymbolAsk();


/*
// Write password to the #password input
function writePassword() {
    var newpassword = generatePassword();
    var passwordUnique = document.querySelector("#password");

    passwordUnique.value = newpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


*/