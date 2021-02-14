// Assignment Code
    let generateBtn = document.querySelector("#generate");
    

// Write password to the #password input

    function writePassword() {

//(No tbeing used) => let password = generatePassword();

//Password Values
    let upper = ["A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let number = ["0","1","2","3","4","5","6","7","8","9"];
    let symbol = ["!","$","%","&","*","+","-","/",":",";","<","=",">","?","@","[","^","~"];
    let values= [];

// Password Length Prompt

    let length = prompt ("Choose a number betweed 8 and 128 for password length");

    if (length < 8) {
            alert ("Please refresh the page and choose a number greater than 8.")
            }

    if (length> 128){
            alert ("Please refresh the page and choose a number less the 128.")
             }
// Other Prompts
    else{
        if (confirm("Do you want upper case letters?")){
            Array.prototype.push.apply(values, upper);
            }
        if(confirm("Do you want lower case letters?")){
            Array.prototype.push.apply(values, lower);
            }
        if(confirm("Do you want numbers?")){
            Array.prototype.push.apply(values, number);
            }
    
        if(confirm("Do you want symbols?")){
            Array.prototype.push.apply(values, symbol);
           }

// Password Formation
    let passwordText = document.querySelector("#password");
    let password= "";
    passwordText.value = password;
      
  

//Loop for function

    for(var i=0; i<length; i++){
        var random = Math.floor(Math.random()*values.length);
        password += values[random];
}
    document.getElementById("password").value = password;
}}

// Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
