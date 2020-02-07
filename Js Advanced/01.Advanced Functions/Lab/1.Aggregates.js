function solve(inputArgs) {
    let sum = inputArgs.reduce((a, x) => {
        return a + x;
    });

    let min = Math.min(...inputArgs);
    let max = Math.max(...inputArgs);

    let product = inputArgs.reduce((a, x) => {
        return a * x;
    });

    let join = inputArgs.join('');

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}

solve([5, -3, 20, 7, 0.5]);