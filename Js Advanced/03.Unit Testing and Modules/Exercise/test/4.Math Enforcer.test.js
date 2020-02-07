const expect = require('chai').expect;
const mathEnforcer = require('../4.Math Enforcer').mathEnforcer;

describe('Math enforcer tests', () => {
    describe('Valid tests', () => {
        it('addFive should return the input int number incremented by 5', () => {
            const input = 2;
            const expected = 7;

            const actual = mathEnforcer.addFive(input);

            expect(actual).to.be.equal(expected);
        });

        it('addFive should return the input float number incremented by 5', () => {
            const input = 3.14;
            const expected = 8.14;

            const actual = mathEnforcer.addFive(input);

            expect(actual).to.be.equal(expected);
        });

        it('addFive should return the input negative number incremented by 5', () => {
            const input = -9;
            const expected = -4;

            const actual = mathEnforcer.addFive(input);

            expect(actual).to.be.equal(expected);
        });

        it('subtractTen should return the input int number subtracted with 10', () => {
            const input = 10;
            const expected = 0;

            const actual = mathEnforcer.subtractTen(input);

            expect(actual).to.be.equal(expected);
        });

        it('subtractTen should return the input float number subtracted with 10', () => {
            const input = 15.35;
            const expected = 5.35;

            const actual = mathEnforcer.subtractTen(input);

            expect(actual).to.be.equal(expected);
        });

        it('subtractTen should return the negative input number subtracted with 10', () => {
            const input = -23;
            const expected = -33;

            const actual = mathEnforcer.subtractTen(input);

            expect(actual).to.be.equal(expected);
        });

        it('sum should return the sum of two positive integers', () => {
            const num1 = 7;
            const num2 = 12;
            const expected = 19;

            const actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.be.equal(expected);
        });

        it('sum should return the sum of two negative integers', () => {
            const num1 = -32;
            const num2 = -12;
            const expected = -44;

            const actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.be.equal(expected);
        });

        it('sum should return the sum of two positive floating numbers', () => {
            const num1 = 3.2;
            const num2 = 1.12;
            const expected = 4.32;

            const actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.be.equal(expected);
        });
    });

    describe('Invalid tests', () => {
        it('addFive should return undefined when input is not a number', () => {
            const input = '4';
            
            const actual = mathEnforcer.addFive(input);

            expect(actual).to.equal(undefined, 'Input must be a Number');
        });

        it('subtractTen should return undefined when input is not a number', () => {
            const input = {};

            const actual = mathEnforcer.subtractTen(input);

            expect(actual).to.equal(undefined, 'Input must be a number');
        });

        it('sum should return undefined when both input numbers are not numbers', () => {
            const num1 = 'sdc';
            const num2 = {};
            
            const actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.equal(undefined, 'Input must be two numbers');
        });

        it('sum should return undefined when first parameter is not a number', () => {
            const num1 = [];
            const num2 = 2;

            const actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.equal(undefined, 'First parameter should be a number');
        });

        it('sum should return undefined when second parameter is not a nunmber', () => {
            const num1 = 4;
            const num2 = 'asd';

            const actual = mathEnforcer.sum(num1, num2);

            expect(actual).to.equal(undefined, 'Second parameter should be a number');
        });

        it('sum should return undefined when only one parameter is passed', () => {
            const num1 = 2;

            const actual = mathEnforcer.sum(num1);

            expect(actual).to.equal(undefined, 'This function works with two parameters');
        });
    });
});