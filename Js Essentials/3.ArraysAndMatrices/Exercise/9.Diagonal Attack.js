function solve(inputMatrix) {
       let matrix = [];

       for (let i = 0; i < inputMatrix.length; i++) {
              matrix[i] = new Array();
              let current = inputMatrix[i].split(' ');

              for (let j = 0; j < current.length; j++) {
                     let number = Number(current[j]);

                     matrix[i][j] = number;
              }
       }


       let primarySum = 0;
       let secondarySum = 0;

       let size = matrix.length;

       for (let i = 0; i < size; i++) {
              let mainNumber = Number(matrix[i][i]);
              let secondaryNumber = Number(matrix[i][size - 1 - i]);

              primarySum += mainNumber;
              secondarySum += secondaryNumber;
       }

       if (primarySum === secondarySum) {
              for (let i = 0; i < matrix.length; i++) {
                     for (let j = 0; j < matrix[i].length; j++) {
                            if (j === i || j === size - 1 - i) {
                                   continue;
                            }

                            matrix[i][j] = primarySum;
                     }
              }
       }

       for (let numbers of matrix) {
              console.log(numbers.join(' '));
       }
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);