function solve(inputArgs) {
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < inputArgs.length; i++) {
        for (let j = 0; j < inputArgs[i].length; j++) {
            if (inputArgs[i][j] > maxNumber) {
                maxNumber = inputArgs[i][j];
            }
        }
    }

    return maxNumber;
}

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));