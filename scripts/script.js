function makePassword() {

    var result = document.getElementById("generatedPassword");
    // result.value = "Your Secure Password"; 

    var useNums = confirm("Do you want to use numbers?");
    var useUpperCase = confirm("Do you want to use upper case letters?");
    var useLowerCase = confirm("Do you want to use lower case letters");
    var useSpecialChars = confirm("Do you want to use special characters?");

    var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialChars = "!@#$%&*?~^<>[]{}\/|()";
    var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    var upperCase = lowerCase.toUpperCase();

    // clear out types of characters use for each run 
    var useArrays = [];
    console.log(useArrays);

    // verify that at least one type of character was selected 
    if (!useNums && !useUpperCase && !useLowerCase && !useSpecialChars) {
        alert("Must select at least one type of character, will use all types.");
        useUpperCase = true;
        useLowerCase = true;
        useNums = true;
        useSpecialChars = true;
    }

    if (useNums) {
        useArrays.push(nums);
    }
    if (useUpperCase) {
        useArrays.push(upperCase);
    }

    if (useLowerCase) {
        useArrays.push(lowerCase);
    }

    if (useSpecialChars) {
        useArrays.push(specialChars);
    }

    console.log(useArrays);

    var howLong = prompt("How long do you want your password to be (8-128 chars)?");
    if (howLong < 8 || howLong > 128) {
        alert("Only lengths between 8 and 128 are valid, using 24");
    }

    // initialize the password to a null string 
    var password = "";

    for (var i = 0; i < howLong; i++) {
        // randomly pick type of character from types user selected 
        var charType = Math.floor(Math.random() * useArrays.length);
        console.log(charType);

        // randomly pick a character from that array 
        var charSelection = Math.floor(Math.random() * useArrays[charType].length);
        console.log(charSelection);

        // append it to the password 
        password = password + useArrays[charType][charSelection];
        console.log(password);
    }

    result.textContent = password;

    // now it can be copied so enable the button 
    document.getElementById("copyClipboard").disabled = false;

}

function copyToClipboard() {
    passwordEl = document.getElementById("generatedPassword");
    passwordEl.select();
    document.execCommand("copy");
    // somehow indicate that it has been copied? 
    alert("Generated password copied to clipboard");
    document.getSelection().removeAllRanges();
}

