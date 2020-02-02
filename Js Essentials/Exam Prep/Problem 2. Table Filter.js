function solve(inputMatrix, commandArgs) {
    let tokens = commandArgs.split(' ').filter(x => x !== '');
    let command = tokens[0];
    let header = tokens[1];

    switch (command) {
        case 'sort':
            let indexHeader = inputMatrix[0].indexOf(header);
            let test = [];

            for (let i = 1; i < inputMatrix.length; i++) {
                let obj = {
                    'content': inputMatrix[i][indexHeader],
                    'index': i
                };

                test.push(obj);
            }

            test = test.sort((a, b) => {
                return a.localeCompare(b);
            });

            console.log(test);

            for (let i = 1; i < inputMatrix.length; i++) {
                if (inputMatrix[i][indexHeader] !== test[i - 1]) {
                    console.log(inputMatrix.indexOf(test[i - 1]));
                }
            }

        break;
    }

    console.log();
}

solve([['name', 'age', 'grade'],
['Peter', '25', '5.00'],
['George', '34', '6.00'],
['Marry', '28', '5.49']],
'sort name');