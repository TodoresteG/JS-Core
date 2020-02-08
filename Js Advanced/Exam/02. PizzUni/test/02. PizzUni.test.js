const expect = require('chai').expect;
const PizzUni = require('../02. PizzUni').PizzUni;

describe('PizzUni test', () => {
    it('constructor should initialize PizzUni with two empty arrays and an object', () => {
        const pizza = new PizzUni();
        const expectedUsers = [];
        const expectedProducts = [];
        const expectedAvailable = {
            'pizzas': ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
            'drinks': ['Coca-Cola', 'Fanta', 'Water']
        };

        expect(JSON.stringify(pizza.registeredUsers)).to.be.equal(JSON.stringify(expectedUsers));
        expect(JSON.stringify(pizza.orders)).to.be.equal(JSON.stringify(expectedProducts));
        expect(JSON.stringify(pizza.availableProducts)).to.be.equal(JSON.stringify(expectedAvailable));
    });

    it('registerUser should create and return current user', () => {
        const pizza = new PizzUni();
        const expected = {
            'email': 'Gambino',
            'orderHistory': []
        };

        const actual = pizza.registerUser('Gambino');

        expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
    });

    it('registerUser should push current user in registeredUsers', () => {
        const pizza = new PizzUni();
        const expected = 1;

        pizza.registerUser('Gambino');
        const actual = pizza.registeredUsers.length;

        expect(actual).to.be.equal(expected);
    });

    it('registerUser should throw error when email is already used', () => {
        const pizza = new PizzUni();
        
        pizza.registerUser('test');

        expect(() => pizza.registerUser('test')).to.throw('This email address (test) is already being used!');
    });

    it('makeAnOrder should make an order and return the index of order in orders with drink', () => {
        const pizza = new PizzUni();
        const expected = 0;

        pizza.registerUser('Gambino');
        const actual = pizza.makeAnOrder('Gambino', 'Italian Style', 'Fanta');

        expect(actual).to.be.equal(expected);
    });

    it('makeAnOrder should make an order and return the index of the order in orders without drink', () => {
        const pizza = new PizzUni();
        const expected = 0;

        pizza.registerUser('Gambino');
        const actual = pizza.makeAnOrder('Gambino', 'Italian Style');

        expect(actual).to.be.equal(expected);
    });

    it('makeAnOrder should throw exception when email is invalid', () => {
        const pizza = new PizzUni();

        expect(() => pizza.makeAnOrder('test', 'Italian Style')).to.throw('You must be registered to make orders!');
    });

    it('makeAnOrder should throw error when pizza name is not supported', () => {
        const pizza = new PizzUni();

        pizza.registerUser('Gambino');
        expect(() => pizza.makeAnOrder('Gambino', 'not supported pizza')).to.throw('You must order at least 1 Pizza to finish the order.');
    });

    it('makeAnOrder should push the order in orders', () => {
        const pizza = new PizzUni();
        const expected = 1;

        pizza.registerUser('Gambino');
        pizza.makeAnOrder('Gambino', 'Italian Style');

        const actual = pizza.orders.length;

        expect(actual).to.be.equal(expected);
    });

    it('completeOrder should complete the first pending order', () => {
        const pizza = new PizzUni();
        const expected = {
            'orderedPizza': 'Classic Margherita',
            'email': 'Gambino',
            'status': 'completed'
        };

        pizza.registerUser('Gambino');
        pizza.makeAnOrder('Gambino', 'Classic Margherita');

        const actual = pizza.completeOrder();

        expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
    });

    it('completeOrder should return undefined', () => {
        const pizza = new PizzUni();

        expect(pizza.completeOrder()).to.be.undefined;
    });

    it('detailsAboutMyOrder should return details about the order', () => {
        const pizza = new PizzUni();
        const expected = 'Status of your order: pending';

        pizza.registerUser('Gambino');
        pizza.makeAnOrder('Gambino', 'Classic Margherita');

        const actual = pizza.detailsAboutMyOrder(0);

        expect(actual).to.be.equal(expected);
    });

    it('detailsAboutMyOrder should return undefined', () => {
        const pizza = new PizzUni();
        
        expect(pizza.detailsAboutMyOrder(100)).to.be.undefined;
    });

    it('doesTheUserExist should return founded object', () => {
        const pizza = new PizzUni();
        const expected = {
            'email': 'Gambino',
            'orderHistory': []
        };

        pizza.registerUser('Gambino');
        
        const actual = pizza.doesTheUserExist('Gambino');

        expect(JSON.stringify(actual)).to.be.equal(JSON.stringify(expected));
    });

    it('doesTheUserExist should return undefined', () => {
        const pizza = new PizzUni();

        pizza.registerUser('Gambino');

        expect(pizza.doesTheUserExist('test')).to.be.undefined;
    });
});