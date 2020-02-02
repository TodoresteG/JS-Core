function solve(inputArgs) {
    let banknotes = {
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0,
        1: 0
    };

    let atmMoney = 0;

    for (let i = 0; i < inputArgs.length; i++) {
        let currentArr = inputArgs[i];

        if (currentArr.length > 2) {
            let insertedCash = 0;

            for (let banknote of currentArr) {
                banknotes[banknote] += 1;
                atmMoney += banknote;
                insertedCash += banknote;
            }

            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${atmMoney}$.`);
        } else if (currentArr.length === 2) {
            let userAccountBalance = currentArr[0];
            let moneyToWithdraw = currentArr[1];

            if (userAccountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${userAccountBalance}$.`);
                continue;
            } else if (atmMoney < moneyToWithdraw) {
                console.log(`ATM machine is out of order!`);
                continue;
            } 

            let withdrawedMoney = 0;

            let sortedBanknotes = Object.keys(banknotes).sort((a, b) => {
                return b - a;
            })

            while (moneyToWithdraw !== 0) {
                for (let key of sortedBanknotes) {
                    let currentBanknote = parseInt(key);
    
                    if (moneyToWithdraw >= currentBanknote) {
                        moneyToWithdraw -= currentBanknote;
                        withdrawedMoney += currentBanknote;
                        banknotes[currentBanknote] -= 1;
                    }
                }
            }
            
            atmMoney -= withdrawedMoney;
            userAccountBalance -= withdrawedMoney;
            console.log(`You get ${withdrawedMoney}$. Account balance: ${userAccountBalance}$. Thank you!`);
        } else if (currentArr.length === 1) {
            let banknoteToCheck = currentArr[0];

            console.log(`Service Report: Banknotes from ${banknoteToCheck}$: ${banknotes[banknoteToCheck]}.`);
        }
    }
}

solve([[20, 5, 100, 20, 1],
    [457, 25],
    [1],
    [10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
    [20, 85],
    [5000, 4500]]);