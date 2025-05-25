const mydata = document.getElementById("inputvalue");
const lengthRange = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const copyButton = document.getElementById("copyicon");



function generatePassword() {
    const length = parseInt(lengthRange.value);
    let characterSet = "";
    let password = "";

    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = uppercaseLetters.toLowerCase();
    const digitChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/";

    // Add selected character sets
    if (uppercase.checked) characterSet += uppercaseLetters;
    if (lowercase.checked) characterSet += lowercaseLetters;
    if (numbers.checked) characterSet += digitChars;
    if (symbols.checked) characterSet += symbolChars;
    console.log(characterSet);

    if (characterSet === "") {
        alert("Please select at least one character type!");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    mydata.value = password;
}


// Update the displayed password length in real time
lengthRange.addEventListener("input", function () {
    lengthValue.textContent = lengthRange.value;
});

function generatePassword() {
    const length = parseInt(lengthRange.value);
    let characterSet = "";
    let password = "";

    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = uppercaseLetters.toLowerCase();
    const digitChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/";

    // Add selected character sets
    if (uppercase.checked) characterSet += uppercaseLetters;
    if (lowercase.checked) characterSet += lowercaseLetters;
    if (numbers.checked) characterSet += digitChars;
    if (symbols.checked) characterSet += symbolChars;
    console.log(characterSet);

    if (characterSet === "") {
        alert("Please select at least one character type!");
        return;
    }

    for (let i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }

    mydata.value = password;

    copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(password);
        copyButton.textContent = "✔️";
        copyButton.style.display="";
        setTimeout(function() {
            copyButton.textContent = "";
       
        }, 1000);

    });
    
    
    // navigator.clipboard.writeText(password);
    
}
