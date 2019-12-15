let length;
while(!(length > 7 && length < 129))
{
    length = prompt("How long of a password between 8 and 128");
}

let characterType = {
    special   : confirm("Include special characters? (i.e ! $ .)"),
    numerical : confirm("Include numbers?"),
    lowercase : confirm("include lowercase characters?"),
    upperCase : confirm("Include uppercase characters?")
    // special   : true,
    // numerical : true,
    // lowercase : true,
    // upperCase : true
}

let generatedPassword = document.querySelector(".generatedPassword");
    console.log(generatedPassword.textContent);

document.querySelector(".button1").addEventListener("click", randomPassword);
document.querySelector(".button2").addEventListener("click", copyToClipBoard);

while(!(characterType.special || characterType.numerical || characterType.lowercase || characterType.upperCase))
{
    alert("Please include at least one character type.");
    characterType.special = confirm("Include special characters? (i.e ! $ .)");
    characterType.numerical = confirm("Include numbers?");
    characterType.lowercase = confirm("include lowercase characters?");
    characterType.upperCase = confirm("Include uppercase characters?");
}


console.log(length, characterType);

function randomPassword()
{
    let specailChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let numericalChar = "1234567890";
    let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let characterset =""; 
    generatedPassword.textContent = characterset;
    if(characterType.special)
    {
        characterset += specailChar;
    }
    if(characterType.numerical)
    {
        characterset += numericalChar;
    }
    if(characterType.lowercase)
    {
        characterset += lowercaseChar;
    }
    if(characterType.upperCase)
    {
        characterset += uppercaseChar;
    }

    for (let i = 0; i < length; i++) {
        let tempChar = characterset[Math.floor(Math.random()*characterset.length)];
        console.log(tempChar);
        generatedPassword.textContent += tempChar;
    }

    console.log(generatedPassword.textContent);
    generatedPassword.style.color = "black";
    generatedPassword.style.fontWeight  = "bold";    
}

function copyToClipBoard()
{
    document.querySelector("textarea").select();
    document.execCommand("copy");
    console.log("CopytoClipBoard")
}