function solve(inputArgs) {
    let rotations = Number(inputArgs.pop());

    for (let i = 0; i < rotations; i++) {
        let lastElement = inputArgs.pop();
        inputArgs.unshift(lastElement);
    }

    console.log(inputArgs.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
);