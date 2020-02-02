function solve(inputArr, divider) {
    let half = inputArr.length / 2;

    let firstGiant = 0;
    let secondGiant = 0;

    let fisrtArray = inputArr.slice(0, half);
    let secondArray = inputArr.slice(half);

    let reducer = (acumolator, currentValue) => acumolator * currentValue;

    for (let i = 0; i < half; i += divider) {
        let firstCurrent = fisrtArray.slice(i, i + divider);
        let secondCurrent = secondArray.slice(i, i + divider);

        firstGiant += firstCurrent.reduce(reducer);
        secondGiant += secondCurrent.reduce(reducer);
    }

    let damagePerHit = Math.min(...inputArr);
    let biggestNumber = Math.max(...inputArr);
    let rounds = 1;

    let isFirstWinner = false;
    let isSecondWinner = false;
    let isDraw = false;

    while (true) {
        if (firstGiant <= biggestNumber) {
            if (firstGiant === secondGiant) {
                isDraw = true;
            }

            isSecondWinner = true;
            break;
        }

        if (secondGiant <= biggestNumber) {
            if (firstGiant === secondGiant) {
                isDraw = true;
            }

            isFirstWinner = true;
            break;
        }

        firstGiant -= damagePerHit;
        secondGiant -= damagePerHit;

        rounds++;
    }

    if (isDraw === true) {
        console.log(`Its a draw ${firstGiant} - ${secondGiant}`);
        return;
    }

    if (isFirstWinner === true) {
        console.log(`First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`);
    } else {
        console.log(`Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`);
    }
}

solve([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);