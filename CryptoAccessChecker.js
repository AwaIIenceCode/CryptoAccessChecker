const prompt = require("prompt-sync");

// fun for enter user age
function enterUserAge()
{
    let userAge;

    while(isNaN(userAge))
    {
        userAge = Number(prompt("\nEnter your age, to check your eligibility -> "));
    
        if (isNaN(userAge) || userAge <= 0 || userAge >= 150) { console.log("Must be a number in the range from 0 to 150, try again!"); continue; }
    }

    return userAge;
}

// fun for enter user deposit
function enterUserDeposit()
{
    let userDeposit;

    while(isNaN(userDeposit))
    {
        userDeposit = Number(prompt("\nEnter your sum deposit -> "));

        if (isNaN(userDeposit) || userDeposit < 0) { console.log("Error"); continue; }
    }

    return userDeposit; 
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