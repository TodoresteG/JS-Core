function solve(inputArgs) {
    let biggestCurrent = inputArgs.shift();
    let nonDescendingSequence = [];
    nonDescendingSequence.push(biggestCurrent);

    for (let number of inputArgs) {
        if (number >= biggestCurrent) {
            biggestCurrent = number;
            nonDescendingSequence.push(biggestCurrent);
        }
    }

    for (let number of nonDescendingSequence) {
        console.log(number);
    }
}

solve([20, 
    3, 
    2, 
    15,
    6, 
    1]    
    );