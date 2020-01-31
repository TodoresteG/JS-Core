function solve(inputArgs) {
    let reversedOddPositionElements = [];

    for (let i = 0; i < inputArgs.length; i++) {
        let currentNum = inputArgs[i];

        if (i % 2 !== 0) {
            currentNum *= 2;
            reversedOddPositionElements.push(currentNum);
        }
    }

    reversedOddPositionElements.reverse();

    console.log(reversedOddPositionElements.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);