
function oddOrEven(num){
    const odd = "odd";
    const even = "even";
    if(num % 2 === 0){
        return even;
    }
    else{
        return odd;
    }
}

function pickRandomFortuneNumber(num){
    const evenNumeberPick = [1, 4, 5, 8];
    const oddNumberPick = [2, 3, 6, 7];
    if(oddOrEven(num) === "even"){
        return evenNumeberPick[Math.floor(Math.random() * evenNumeberPick.length)];
    }
    else{
        return oddNumberPick[Math.floor(Math.random() * oddNumberPick.length)];
    }
}

function tellFortune(num){
    let randomNum = pickRandomFortuneNumber(num);

    switch(randomNum){
        case 1:
            console.log("You will got on a trip!");
            break;
        case 2:
            console.log("You will be rich!");
            break;
        case 3:
            console.log("You will get an A on a test!");
            break;
        case 4:
            console.log("Good fortune will be yours.");
            break;
        case 5:
            console.log("Do a good deed today.");
            break;
        case 6:
            console.log("Someone will call you today.");
            break;
        case 7:
            console.log("You will go to a party soon!");
            break;
        case 8:
            console.log("Be careful on Tuesday.");
            break;
        default:
            console.log("Please enter valid favorite number.");
            break;
    }
}