function solve(inputArgs) {
    let totalIncome = 0;

    for (let i = 0; i < inputArgs.length; i++) {
        let price = 0;

        let order = inputArgs[i].split(', ');

        let money = Number(order[0]);
        let drink = order[1];
        let sugarAmount = order[order.length - 1];

        switch (drink) {
            case 'coffee':
            let coffeeType = order[2];

            if (coffeeType === 'caffeine') {
                price += 0.80;
            }
            else {
                price += 0.90;
            }

            if (order.length === 5) {
                let additionalPrice = price * 10 / 100;

                price += Number(additionalPrice.toFixed(1));
            }

            break;
            case 'tea':
            price += 0.80;

            if (order.length === 4) {
                let additionalPrice = price * 10 / 100;

                price += Number(additionalPrice.toFixed(1));
            }
            
            break; 
        }

        if (sugarAmount > 0) {
            price += 0.1;
        }

        if (money >= price) {
            totalIncome += price;

            let change = money - price;

            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        }
        else {
            let neededMoney = Math.abs(price - money);

            console.log(`Not enough money for ${drink}. Need ${neededMoney.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);