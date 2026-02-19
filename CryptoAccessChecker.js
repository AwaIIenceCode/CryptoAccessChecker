const prompt = require("prompt-sync");

// fun for enter user age
function enterUserAge()
{
    let userAge;

    while(true)
    {
        userAge = Number(prompt("\nEnter your age, to check your eligibility -> "));
    
        if (isNaN(userAge) || userAge <= 0 || userAge >= 150) { console.log("Must be a number in the range from 0 to 150, try again!"); continue; }

        else { return userAge; }
    }
}

// fun for enter user deposit
function enterUserDeposit()
{
    let userDeposit;

    while(true)
    {
        userDeposit = Number(prompt("\nEnter your sum deposit -> "));

        if (isNaN(userDeposit) || userDeposit < 0) { console.log("Sum your deposit can`t be above zero, try again!"); continue; }
    
        else { return userDeposit; }
    }
}

//fun for verification user
function verificationUserKYC()
{
    let userKYS = false;

    console.log("\nWelcome the verification page, write your adress, name and surname, please");

    enterVerificationName();
    enterVerificationSurname();
    enterVerificationAdress();

    return userKYS = true;
}
// fun for verification user name
function enterVerificationName() 
{
    let userName;

    while(true)
    {
        userName = String(prompt("\nEnter your name -> ").toLowerCase());

        if (userName === null) { console.log("Your name can`t be empty, try again!"); continue; }

        else { return userName; }
    }

}

// fun for verification user surname
function enterVerificationSurname() 
{
    let userSurname;

    while(true)
    {
        userName = String(prompt("\nEnter your surname -> ").toLowerCase());

        if (userSurname === null) { console.log("Your surname can`t be empty, try again!"); continue; }

        else { return userSurname; }
    }
}

// fun for verification user adress
function enterVerificationAdress() 
{
    let userAdress;

    while(true)
    {
        userName = String(prompt("\nEnter your adress -> ").toLowerCase());

        if (userAdress === null) { console.log("Your adress can`t be empty, try again!"); continue; }

        else { return userAdress; }
    }
}

// fun for check user age
function checkUserAge(userAge, minAge)
{
    return userAge >= minAge;
}

// fun for check user KYC
function checkKYC()
{}

// for run 
function runCryptoAction()
{}

//the main method that delegates the entire program
function main()
{
    console.log("Welcome the acces checker in cryptocurrency");

    let userChoise;

    while (true)
    {
        console.log("Press \"1\" for buy crypto\nPress \"2\" for sell crypto\nPress \"3\" for futures trades\nPress \"4\" for exit b");

        switch(userChoise)
        {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                return;
            default:
                break;
        }
    }
}