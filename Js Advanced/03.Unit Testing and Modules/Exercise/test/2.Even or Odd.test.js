const expect = require('chai').expect;
const isOddOrEven = require('../2.Even or Odd');

describe('Even or Odd tests', () => {
    describe('Valid tests', () => {
        it('String should return result', () => {
            const input = 'das-Fx';

            const actual = isOddOrEven(input);

            expect(actual).to.be.string;
        });

        it('String with even length should return \'even\'', () => {
            const input = 'test';
            const expected = 'even';

            const actual = isOddOrEven(input);

            expect(actual).to.be.equal(expected);
        });

        it('String with odd length should return \'odd\'', () => {
            const input = 'Todoreste';
            const expected = 'odd';

            const actual = isOddOrEven(input);

            expect(actual).to.be.equal(expected);
        });
    });

    describe('Invalid tests', () => {
        it('Number should return undefined', () => {
            const input = 2;

            const actual = isOddOrEven(input);

            expect(actual).to.be.undefined;
        });

        it('object should return undefined', () => {
            const input = {};

            const actual = isOddOrEven(input);

            expect(actual).to.be.undefined;
        });

        it('function should return undefined', () => {
            const input = () => { };

            const actual = isOddOrEven(input);

            expect(actual).to.be.undefined;
        });

        it('Array should return undefined', () => {
            const input = [];

            const actual = isOddOrEven(input);

            expect(actual).to.be.undefined;
        });
    });
});