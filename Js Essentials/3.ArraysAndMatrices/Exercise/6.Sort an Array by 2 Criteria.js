function solve(inputArgs) {
    let sortedArr = inputArgs.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    for (let element of sortedArr) {
        console.log(element);
    }
}

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);