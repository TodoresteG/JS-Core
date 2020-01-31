function solve(inputArgs) {
    let result = '';

    for (let i = 0; i < inputArgs.length; i++) {
        let currentNumber = inputArgs[i];

        if (i % 2 === 0) {
            result += currentNumber + ' ';
        }
    }

    console.log(result);
}

solve(['20', '30', '40']);