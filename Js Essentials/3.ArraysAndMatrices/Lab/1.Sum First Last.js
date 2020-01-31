function solve(inputArgs) {
    let firstNumber = Number(inputArgs[0]);
    let lastNumber = Number(inputArgs[inputArgs.length - 1]);

    console.log(firstNumber + lastNumber);
}

solve(['20', '30', '40']);