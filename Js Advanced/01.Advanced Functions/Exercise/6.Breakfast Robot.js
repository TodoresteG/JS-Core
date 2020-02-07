function solution() {
    let storage = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    };

    let library = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        },
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        }
    };

    let test = function(instruction) {
        let tokens = instruction.split(' ').filter(x => x !== '');
        let command = tokens[0];

        if (command === 'restock') {
            let microelement = tokens[1];
            let quantity = parseInt(tokens[2]);

            storage[microelement] += quantity;
            return 'Success';
        } else if (command === 'prepare') {
            let productName = tokens[1];
            let quantity = parseInt(tokens[2]);
            let product = library[productName];

            let canBuy = true;

            for (let i = 0; i < quantity; i++) {
                for (let prop in product) {
                    let quantityNeeded = product[prop];

                    if (storage[prop] < quantityNeeded) {
                        canBuy = false;
                        return `Error: not enough ${prop} in stock`;
                    }
                }

                if (canBuy) {
                    for (let prop in product) {
                        storage[prop] -= product[prop];
                    }
                }
            }
            
            return 'Success';
        } else if (command === 'report') {
            return `protein=${storage['protein']} carbohydrate=${storage['carbohydrate']} fat=${storage['fat']} flavour=${storage['flavour']}`;
        }
    }

    return test;
}

let manager = solution();

console.log(manager('restock protein 100'));
console.log(manager('restock carbohydrate 100'));
console.log(manager('restock fat 100'));
console.log(manager('restock flavour 100'));
console.log(manager('report'));
console.log(manager('prepare apple 2'));
console.log(manager('report'));
console.log(manager('prepare apple 1'));
console.log(manager('report'));