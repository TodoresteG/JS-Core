function solve(inputArgs) {
    let step = Number(inputArgs.pop());

    for (let i = 0; i < inputArgs.length; i += step) {
        console.log(inputArgs[i]);
    }
}

solve(['dsa',
'asd', 
'test', 
'tset', 
'2']
);