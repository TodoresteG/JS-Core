function solve(inputMatrix) {
    for (let i = 0; i < inputMatrix.length; i++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let j = 0; j < inputMatrix.length; j++) {
            sumRow += inputMatrix[i][j];
            sumCol += inputMatrix[j][i];
        }

        if (sumRow !== sumCol) {
            return false;
        }
    }

    return true;
}

console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));