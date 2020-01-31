function solve(inputArgs) {
    let lowestNum = Math.min(...inputArgs);
    let indexOfLowestNum = inputArgs.indexOf(lowestNum);

    inputArgs.splice(indexOfLowestNum, 1);

    let secondLowestNum = Math.min(...inputArgs);
    let secondIndex = inputArgs.indexOf(secondLowestNum);

    inputArgs.splice(secondIndex, 1);

    console.log(lowestNum + ' ' + secondLowestNum);
}

solve([3, 0, 10, 4, 7, 3]);