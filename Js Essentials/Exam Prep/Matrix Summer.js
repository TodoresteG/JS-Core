function solve(firstMatrix, secondMatrix) {
    for (let i = 0; i < secondMatrix.length; i++) {

        for (let j = 0; j < secondMatrix[i].length; j++) {
            let sum = firstMatrix[i][j] + secondMatrix[i][j];
            
            if (sum > 9) {
                let test = firstMatrix[i][j + 1] + secondMatrix[i][j];
                
                if (test > 9) {
                    firstMatrix[i].push(secondMatrix[i][j]);
                    continue;
                }
                
                firstMatrix[i][j + 1] = test;
            } else {
                firstMatrix[i][j] = sum;
            }
        }
    }

    console.log(JSON.stringify(firstMatrix));
}

solve([[9, 2, 3], [4, 5, 6], [7, 8, 8]],
    [[1, 1, 1], [1, 1, 1], [1, 1, 1]]                 
);