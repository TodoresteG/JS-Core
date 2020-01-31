function solve(inputArgs) {
    let orderedNumbers = [];

    for (let number of inputArgs) {
        if (number < 0) {
            orderedNumbers.unshift(number);
        }
        else {
            orderedNumbers.push(number);
        }
    }

    for (let number of orderedNumbers) {
        console.log(number);
    }
}

solve([3, -2, 0, -1]);