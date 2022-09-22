function oddOrEven(num){
    const odd = "odd";
    const even = "even";
    if(num % 2 === 0 && typeof num === 'number'){
        return even;
    }
    else if(num % 2 !== 0 && typeof num === 'number'){
        return odd;
    }
    else{
        return false;
    }
}

function pickRandomFortuneNumber(num){
    const evenNumeberPick = [1, 4, 5, 8];
    const oddNumberPick = [2, 3, 6, 7];
    if(oddOrEven(num) == "even"){
        return evenNumeberPick[Math.floor(Math.random() * evenNumeberPick.length)];
    }
    else if(oddOrEven(num) == "odd"){
        return oddNumberPick[Math.floor(Math.random() * oddNumberPick.length)];
    }
    else{
        return false;
    }
}

function tellFortune(num){
    let randomNum = pickRandomFortuneNumber(num);
    let text = document.getElementById("paragraph");
    switch(randomNum){
        case 1:
            text.innerHTML = "You will got on a trip!";
            break;
        case 2:
            text.innerHTML = "You will be rich!";
            break;
        case 3:
            text.innerHTML = "You will get an A on a test!";
            break;
        case 4:
            text.innerHTML = "Good fortune will be yours.";
            break;
        case 5:
            text.innerHTML = "Do a good deed today.";
            break;
        case 6:
            text.innerHTML = "Someone will call you today.";
            break;
        case 7:
            text.innerHTML = "You will go to a party soon!";
            break;
        case 8:
            text.innerHTML = "Be careful on Tuesday.";
            break;
        default:
            text.innerHTML = "Please enter valid favorite number.";
            break;
    }
}

function btnFucntion(){
    let numInput = document.getElementById("numberInput").value;

    if(numInput === ""){
        numInput = document.getElementById("numberInput").value = "NaN";
    }
    else{
        numInput = parseInt(document.getElementById("numberInput").value);
    }

    tellFortune(numInput);
}