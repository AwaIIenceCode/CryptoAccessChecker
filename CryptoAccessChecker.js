const prompt = require("prompt-sync");

// fun for check user age
function checkAge()
{}

// 
function checkDeposit()
{}

//
function checkKYC()
{}

//
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