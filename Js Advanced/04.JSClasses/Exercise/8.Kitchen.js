class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = [];
        this.productsInStock = [];
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (let element of products) {
            const tokens = element.split(' ').filter(x => x !== '');

            const productName = tokens[0];
            const productQuantity = +tokens[1];
            const productPrice = +tokens[2];

            if (this.budget >= productPrice) {
                const availableProduct = this.productsInStock.find(x => x.name === productName);

                if (availableProduct) {
                    availableProduct.quantity += productQuantity;
                } else {
                    this.productsInStock.push({
                        'name': productName,
                        'quantity': productQuantity
                    });
                }

                this.budget -= productPrice;

                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        const createdMeal = this.menu.find(x => x.meal === meal);

        if (createdMeal) {
            return `The ${meal} is already in our menu, try something different.`;
        }

        const currentMeal = {
            'meal': meal,
            'price': +price,
            'products': []
        };

        for (let element of neededProducts) {
            const tokens = element.split(' ').filter(x => x !== '');

            const productName = tokens[0];
            const productQuantity = +tokens[1];

            currentMeal.products.push({
                'name': productName,
                'quantity': productQuantity
            });
        }

        this.menu.push(currentMeal);
        return `Great idea! Now with the ${meal} we have ${this.menu.length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        let result = '';

        for (let element of this.menu) {
            result += `${element.meal} - $ ${element.price}\n`;
        }

        if (this.menu.length === 0) {
            result += 'Our menu is not ready yet, please come later...';
        }

        return result;
    }

    makeTheOrder(mealName) {
        const meal = this.menu.find(x => x.meal === mealName);

        if (meal) {
            for (let element of meal.products) {
                const inStockProduct = this.productsInStock.find(x => x.name === element.name);

                if (!inStockProduct || inStockProduct.quantity < element.quantity) {
                    return `For the time being, we cannot complete your order (${mealName}), we are very sorry...`;
                }
            }

            for (let element of meal.products) {
                const inStockProduct = this.productsInStock.find(x => x.name === element.name);

                inStockProduct['quantity'] -= element.quantity;
            }
            
            this.budget += meal.price;
            return `Your order (${mealName}) will be completed in the next 30 minutes and will cost you ${meal.price}.`
        }

        return `There is not ${mealName} yet in our menu, do you want to order something else?`;
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
console.log(kitchen.loadProducts(['Flour 0.3 5', 'Oil 0.2 2', 'Yeast 0.5 5']));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('Pizza'));
console.log(kitchen.showTheMenu());
console.log(kitchen.budget);
console.log(kitchen.productsInStock);