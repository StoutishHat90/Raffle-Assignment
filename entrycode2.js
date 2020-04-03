function entryInfo() {
    const nameOne = document.getElementById("firstName").value;
    const nameTwo = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const dateOfBirth = new Date(document.getElementById("dateOfBirth").value);
    const age = getAge(dateOfBirth, new Date());
    const displayArea = document.getElementById("displayArea");
    
    const validInput = inputCheck(nameOne, nameTwo, email, age, displayArea);
    if (!validInput) return;
    

    const entryData = {
        firstName: nameOne,
        lastName: nameTwo,
        email: email,
        age: age
    };

    displayArea.innerText = ("You are now entered into the raffle, " + nameOne +" "+ nameTwo + ". Good Luck. We will contact you at " + email);
}
function inputCheck(nameOne, nameTwo, email, age, displayArea) {
    if(nameOne.length < 2){
        displayArea.innerText = "First name must be at least 2 characters";
        return false;
    }    
    if(nameTwo.length < 2){
        displayArea.innerText = "last name must be at least 2 characters";
        return false;
    }        
    if(email.length < 8){
        displayArea.innerText = "email must be at least 8 characters";
        return false;
    }
    if(email.indexOf("@") < 0){
        displayArea.innerText = "email must contain an @";
        return false;
    }
    if(email.indexOf(".") < 0){
        displayArea.innerText = "email must contain a period";
        return false;
    }    
    if (age < 18){
        displayArea.innerText ="You must be at least 18 to enter"
        return false;
    }
    return true;
}
