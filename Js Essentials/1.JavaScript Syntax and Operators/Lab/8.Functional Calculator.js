function solve(firstNum, secondNum, operator){
    switch(operator){
        case "+": console.log(firstNum + secondNum); break;
        case "-": console.log(firstNum - secondNum); break;
        case "*": console.log(firstNum * secondNum); break;
        case "/": console.log(firstNum / secondNum); break;
        case "%": console.log(firstNum % secondNum); break;
        case "**": console.log(firstNum ** secondNum); break;
        default: console.log("Invalid operator.");
    }
}

solve(2, 4, '+');