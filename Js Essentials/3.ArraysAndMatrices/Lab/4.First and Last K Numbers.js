function solve(inputArgs) {
    inputArgs = inputArgs.map(Number);

    let count = inputArgs.shift();
    console.log(inputArgs.slice(0, count).join(" "));
    console.log(inputArgs.slice(inputArgs.length-count, inputArgs.length).join(" "));
}

solve([3, 6, 7, 8, 9]);