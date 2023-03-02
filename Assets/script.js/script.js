// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters for password
var specialCharacters = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',
];

// variable for password length numbers
var passwordLength;

// Array of numbers for password
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase letters for password
var lowerCase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
];

// Array of uppercase letters for password
var upperCase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
];

// var for where we are going to push user selctions to
var userSelections = [];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function for running prompts to user for info on password selections
function generatePassword() {
  var passwordLength = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    // if amount of characters isnt acceptable, alert user of acceptable criteria
  } else {
    return alert("Passwords must be 8-128 characters in length.");
  } 
  // gives user options(confirm boxes) to add lower/uppercase letters, numbers and special characters
  var passwordLower = confirm ("Would you like to add lowercase letters?");
  if (passwordLower) {

  }
  var passwordUpper = confirm ("would you like to add uppercase letters?");
  if (passwordUpper) {

  }
  var passwordNumbers = confirm ("Would you like to add numbers?");
  if (passwordNumbers) {

  }
  var passwordSpecialCharacters = confirm ("Would you like to add special characters?");
  if (passwordSpecialCharacters) {

// gives user alert if user didn't select any special criteria
  }  else if (passwordLower === false && passwordUpper === false && passwordNumbers === false && passwordSpecialCharacters === false){
    return alert("At least one special criteria needs to be selected.");
  }
  // created object to carry values out of function above to use in function below
  var options = {
    length: passwordLength,
    hasSpecials: passwordSpecialCharacters,
    hasNumeric: passwordNumbers,
    hasLowerCase: passwordLower,
    hasUpperCase: passwordUpper,
  };

  return options;
}

//function to push user selected options for password to empty array "userSelections"
  function passwordGenerate() {
    console.log('hello');
    var userOptions = generatePassword() 
    console.log(userOptions);

    if (userOptions.hasLowerCase){
      userSelections = userSelections.concat(lowerCase);
    }
  
    if (userOptions.hasUpperCase){
      userSelections = userSelections.concat(upperCase);
    }
  
    if (userOptions.hasNumeric){
      userSelections = userSelections.concat(numbers);
    }
  
    if (userOptions.hasSpecials){
      userSelections = userSelections.concat(specialCharacters);
    }
  
    var password = "";

    console.log(userSelections);
    
    
    
console.log(userOptions.length);
// for loop to randomly select characters from character arrays using userSelection values
    for (var i = 0; i < userOptions.length; i++) {
    var randomIndex = Math.floor(Math.random() * userSelections.length);
    console.log(randomIndex);
    password = password + userSelections[randomIndex];
    console.log(password);
    }
    return password;
  }

  function writePassword() {
    var password = passwordGenerate();
    console.log('hello');
    
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    
  }
 //return passwordOption








// console.log(document)
// user sees passsword generator
// User sees red button
// User clicks button
  // addEventListner
// ask user for password length
  // prompt
// ask character questions
  // confirm box
// user gets password
  // store acceptable choices
 // https://www.w3schools.com/JS/tryit.asp?filename=tryjs_random 
