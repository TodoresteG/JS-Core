function solve(arr1, arr2) {
    let firstNumber = Number(arr1);
    let secondNumber = Number(arr2);

    let sum = 0;

    for (let i = firstNumber; i <= secondNumber; i++){
        sum += i;
    }

    return sum;
}

console.log(solve('-8', '20'));