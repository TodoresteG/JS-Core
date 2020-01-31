function solve(inputMatrix) {
    let primarySum = 0;
    let secondarySum = 0;

    let size = inputMatrix.length;

    for (let i = 0; i < size; i++) {
        primarySum += inputMatrix[i][i];
        secondarySum += inputMatrix[i][size - 1 - i];
    }

    console.log(primarySum + ' ' + secondarySum);
}

solve([[20, 40],
    [10, 60]]);