// Assignment Code
    let generateBtn = document.querySelector("#generate");

// Write password to the #password input

    function writePassword() {
//(No tbeing used) => let password = generatePassword();

  //Password Values
    let values= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$%&*+,-./:;<=>?@[\]^~";

//Password Length
    let complexity = 12;

// Password Formation    
    let passwordText = document.querySelector("#password");
    let password= "";
    passwordText.value = password;

//Loop for function

    for (var i = 0; i < complexity; i++){
      password = password + values.charAt(Math.floor(Math.random()* Math.floor(values.length)))
      }
    document.getElementById("password").value = password;
    }

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
