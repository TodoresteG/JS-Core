function solve(firstNumber, secondNumber, thirdNumber){

    let max = Number.MIN_VALUE;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        max = firstNumber;
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        max = secondNumber;
    }
    else{
        max = thirdNumber;
    }

    console.log(`The largest number is ${max}.`)
}

solve(-3, -5, -22.5);