function solve(number) {
    let stringNumber = number.toString();

    let sum = 0;
    let isEqual = true;

    for (let i = 0; i < stringNumber.length - 1; i++){
        if (stringNumber[i] === stringNumber[i + 1]){
            isEqual = true;
        }
        else {
            isEqual = false;
            break;
        }
    }

    for (let i = 0; i < stringNumber.length; i++){
        let currentNumber = Number(stringNumber[i]);

        sum += currentNumber;
    }

    console.log(isEqual);
    console.log(sum);
}

solve(1234);