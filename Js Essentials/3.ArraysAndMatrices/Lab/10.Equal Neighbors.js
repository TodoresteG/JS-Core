function solve(inputMatrix) {
    let counter = 0;

    let size = inputMatrix.length;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < inputMatrix[i].length; j++) {
            let current = inputMatrix[i][j];

            if (isInside(i + 1, j) && current === inputMatrix[i + 1][j]) {
                counter++;
            }

            if (isInside(i, j + 1) && current === inputMatrix[i][j + 1]) {
                counter++;
            }
        }
    }

    console.log(counter);

    function isInside(row, col) {
        return row >= 0 && row < inputMatrix.length && col >= 0 && col < inputMatrix[row].length;
    }
}

solve([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]
);