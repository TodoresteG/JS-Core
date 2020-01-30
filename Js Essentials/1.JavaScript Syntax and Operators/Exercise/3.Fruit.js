function solve(fruit, weight, pricePerKilo) {
    let kilograms = weight / 1000;

    let neededMoney = kilograms * pricePerKilo;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);