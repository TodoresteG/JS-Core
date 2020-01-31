function solve(inputArgs) {
    let initialNumber = 0;
    let arr = [];

    for (let command of inputArgs) {
        initialNumber++;

        switch (command) {
            case 'add':
                arr.push(initialNumber);
            break;
            case 'remove':
                arr.pop();
            break;
        }
    }

    if (arr.length === 0) {
        console.log('Empty');
        return;
    }

    for (let element of arr) {
        console.log(element);
    }
}

solve(['remove', 
'remove', 
'remove']
);