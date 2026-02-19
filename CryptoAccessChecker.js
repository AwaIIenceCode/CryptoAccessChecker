const prompt = require("prompt-sync")();

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
function enterVerificationUserKYC()
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

        if (!userName.trim()) { console.log("Your name can`t be empty, try again!"); continue; }

        else { return userName; }
    }
}

// fun for verification user surname
function enterVerificationSurname() 
{
    let userSurname;

    while(true)
    {
        userSurname = String(prompt("\nEnter your surname -> ").toLowerCase());

        if (!userSurname.trim()) { console.log("Your surname can`t be empty, try again!"); continue; }

        else { return userSurname; }
    }
}

// fun for verification user adress
function enterVerificationAdress() 
{
    let userAdress;

    while(true)
    {
        userAdress = String(prompt("\nEnter your adress -> ").toLowerCase());

        if (!userAdress.trim()) { console.log("Your adress can`t be empty, try again!"); continue; }

        else { return userAdress; }
    }
}

// fun for check user age
function checkUserAge(userAge, minAge)
{
    return userAge >= minAge;
}

// fun for check user deposit
function checkUserDeposit(userDeposit, minDeposit)
{
    return userDeposit >= minDeposit;
}

// fun for buy crypto 
function buyCrypto()
{}

// fun for sell crypto 
function sellCrypto()
{}

// fun for trades Futures crypto 
function tradesFuturesCrypto()
{}

// for run 
function runCryptoAction(action)
{
    const age = enterUserAge();
    const deposit = enterUserDeposit();
    const isVerified = enterVerificationUserKYC();

    if (!checkUserAge(age, action.minAge))
    {
        console.log(`Access denied. Minimum age is ${action.minAge}`);
        return;
    }

    if (!checkUserDeposit(deposit, action.minDeposit)) 
    {
        console.log(`Minimum deposit is ${action.minDeposit}`);
        return;
    }

    if (!isVerified) 
        {
        console.log("KYC required.");
        return
    }
}

//the main method that delegates the entire program
function main()
{
    console.log("Welcome the acces checker in cryptocurrency");

    const cryptoActions = 
    {
        1: { name: "Use crypto-exchange", minAge: 18, minDeposit: 0 },
        2: { name: "Buy Crypto", minAge: 18, minDeposit: 100 },
        3: { name: "Sell Crypto", minAge: 18, minDeposit: 50 },
        4: { name: "Futures Trading", minAge: 21, minDeposit: 500 }
    };

    let userChoice;

    while (true)
    {
        console.log("\n Press \"1\" for use crypto-exchange Press \"2\" for buy crypto\nPress \"3\" for sell crypto\nPress \"4\" for futures trades\nPress \"5\" for exit");

        userChoice = Number(prompt("\nEnter your choice -> "));

        switch(userChoice)
        {
            case 1:
                {
                    const action = cryptoActions[userChoice];
                    runCryptoAction(action);
                    break;
                }
            
            case 2:
                {
                    const action = cryptoActions[userChoice];
                    runCryptoAction(action);                                         
                    break;
                }

            case 3:
                {
                    const action = cryptoActions[userChoice];
                    runCryptoAction(action);
                    break;
                }
               
            case 4:
                {
                    const action = cryptoActions[userChoice];
                    runCryptoAction(action);                     
                    break;
                }

                case 5: 
                {
                    console.log("Exit the program...");
                    return;
                }
            default:
                break;
        }
    }
}