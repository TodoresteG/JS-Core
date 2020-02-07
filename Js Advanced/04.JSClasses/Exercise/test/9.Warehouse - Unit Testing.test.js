const expect = require('chai').expect;
const Warehouse = require('../9.Warehouse - Unit Testing').Warehouse;

describe('Warehouse test', () => {
    describe('Valid test', () => {
        it('constructor should initialize warehouse when positive integer is passed', () => {
            const warehouse = new Warehouse(10);
            const expected = true;

            const actual = warehouse instanceof Warehouse;

            expect(actual).to.be.equal(expected);
        });

        it('addProduct should add product to availableProducts and increase quantity', () => {
            const warehouse = new Warehouse(50);
            const expected = 5;

            warehouse.addProduct('Food', 'Potato', 5);

            const actual = warehouse.availableProducts.Food['Potato'];

            expect(actual).to.be.equal(expected);
        });

        it('addProduct should return the added object', () => {
            const warehouse = new Warehouse(100);
            const expected = JSON.stringify({
                'Apple': 10
            });

            const actual = JSON.stringify(warehouse.addProduct('Food', 'Apple', 10));

            expect(actual).to.be.equal(expected);
        });

        it('orderProducts should order all product in descending order', () => {
            const warehouse = new Warehouse(40);
            const expected = JSON.stringify({
                'Soda': 10,
                'Water': 5
            });

            warehouse.addProduct('Drink', 'Water', 5);
            warehouse.addProduct('Drink', 'Soda', 10);

            const actual = JSON.stringify(warehouse.orderProducts('Drink'));

            expect(actual).to.be.equal(expected);
        });

        it('occupiedCapacity should return the number of occupied capacity', () => {
            const warehouse = new Warehouse(50);
            const expected = 20;

            warehouse.addProduct('Food', 'Bread', 10);
            warehouse.addProduct('Drink', 'Pepsi', 6);
            warehouse.addProduct('Drink', 'Water', 4);

            const actual = warehouse.occupiedCapacity();

            expect(actual).to.be.equal(expected);
        });

        it('revision should return \'The warehouse is empty\' when it is empty', () => {
            const warehouse = new Warehouse(4);
            const expected = 'The warehouse is empty';

            const actual = warehouse.revision();

            expect(actual).to.be.equal(expected);
        });

        it('revision should return products in correct format', () => {
            const warehouse = new Warehouse(50);
            const expected = 'Product type - [Food]\n'
                            + '- Cheese 12\n'
                            + '- Tomato 8\n'
                            + 'Product type - [Drink]\n'
                            + '- Juice 5\n'
                            + '- Milk 4';

            warehouse.addProduct('Food', 'Tomato', 8);
            warehouse.addProduct('Drink', 'Milk', 4);
            warehouse.addProduct('Drink', 'Juice', 5);
            warehouse.addProduct('Food', 'Cheese', 12);

            warehouse.orderProducts('Food');
            warehouse.orderProducts('Drink');

            const actual = warehouse.revision();

            expect(actual).to.be.equal(expected);
        });

        it('scrapeAProduct should reset quantity when passed quantity is bigger than initial quantity', () => {
            const warehouse = new Warehouse(100);
            const expected = 0;

            warehouse.addProduct('Food', 'Burger', 15);
            warehouse.scrapeAProduct('Burger', 30);

            const actual = warehouse.availableProducts['Food']['Burger'];

            expect(actual).to.be.equal(expected);
        });

        it('scrapeAProduct should return product with subtracted quantity', () => {
            const warehouse = new Warehouse(100);
            const expected = JSON.stringify({
                'Eggs': 1
            });

            warehouse.addProduct('Food', 'Eggs', 19);
            const actual = JSON.stringify(warehouse.scrapeAProduct('Eggs', 18));

            expect(actual).to.be.equal(expected);
        });
    });

    describe('Invalid test', () => {
        it('constructor should throw error when 0 is passed', () => {
            expect(function () { new Warehouse(0) }).to.throw('Invalid given warehouse space');
        });

        it('constructor should throw error when negative number is passed', () => {
            expect(function () { new Warehouse(-10) }).to.throw('Invalid given warehouse space');
        });

        it('constructor should throw error when not a number is passed', () => {
            expect(function () { new Warehouse('asdsa') }).to.throw('Invalid given warehouse space');
        });

        it('addProduct should throw error when there is no space in the warehouse', () => {
            const warehouse = new Warehouse(10);

            expect(function () {
                warehouse.addProduct('type', 'product', 15);
            }).to.throw('There is not enough space or the warehouse is already full');
        });

        it('scrapeAProduct should throw error when can not find product', () => {
            const warehouse = new Warehouse(100);

            expect(function() {warehouse.scrapeAProduct('Apple', 10)}).to.throw('Apple do not exists');
        });
    });
});