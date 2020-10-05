// Assignment Code
var generateBtn = document.querySelector("#generate");


//variable declarations
var possiblePsw;
var lengthPsw;
var lowerCase;
var upperCase;
var numberAsk;
var symbolAsk;

//added temporary  variables because function was not working
var upperLetter = "ZXCVBNMASDFGHJKLQWERTYUIOP";
var lowerLetter = "asdfghjklzxcvbnmqwertyuiop";
var numRandom = "1234567890";
var symRandom = " <>?/:;{}[]!@#$%^&*()-=+";

/* I will uncomment this once I can figure out why functiosn not working to generate random characters

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
*/
console.log(upperLetter);
console.log(lowerLetter);
console.log(symRandom);
console.log(numRandom);


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

// add a function that places or concatenates all possible random numbers

var groupPsw = function() {
    //this variable was delcared in global
    possiblePsw = "";
    if (numberAsk) {
        possiblePsw = numRandom;
    }
    if (symbolAsk) {
        possiblePsw = possiblePsw.concat(symRandom);
    }
    if (lowerCase) {
        possiblePsw = possiblePsw.concat(lowerLetter);
    }
    if (upperCase) {
        possiblePsw = possiblePsw.concat(upperLetter);
    }

};

//create a new password fucntion that works with the length obtain by prompt
var createPassword = function() {
    var newpassword = "";
    for (var l = 0; l < lengthPsw; l++) { //l stands for length
        var char = Math.floor(Math.random() * possiblePsw.length);
        var word = possiblePsw.charAt(char);
        newpassword = newpassword.concat(word);
    }
    return newpassword;
};

//in this function we group all the function that randomize the different inputs
var pswContainer = function() {
    responseLowerCase();
    responseUpperCase();
    responseSymbolAsk();
    responseNumberAsk();
};

//we create a fuction depending on responses from prompt questions
var generatePassword = function() {
    responseLengthPsw();
    pswContainer();
    groupPsw();
    var newpassword = createPassword();
    return newpassword;
};
// calling the question functions to test the functions work
//responseLengthPsw();
//responseLowerCase();
//responseNumberAsk();
//responseUpperCase();
//responseSymbolAsk();
//groupPsw();
console.log(possiblePsw);
console.log(createPassword());
createPassword();



// Write password to the #password input
function writePassword() {
    var newpassword = generatePassword();
    var passwordUnique = document.querySelector("#password");

    passwordUnique.value = newpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);