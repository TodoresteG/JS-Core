const expect = require('chai').expect;
const lookupChar = require('../3.Char Lookup').lookupChar;

describe('Char Lookup test', () => {
    describe('Valid tests', () => {
        it('Index which is inside of the String should return Character', () => {
            const str = 'test';
            const index = 1;
            const expected = 'e';

            const actual = lookupChar(str, index);

            expect(actual).to.equal(expected);
        });

        it('Index which value is 0 should return the first Character', () => {
            const str = 'abc';
            const index = 0;
            const expected = 'a';

            const actual = lookupChar(str, index);

            expect(actual).to.equal(expected);
        });

        it('Index which value is String.lenght - 1', () => {
            const str = 'ebasimo';
            const index = str.length - 1;
            const expected = 'o';

            const actual = lookupChar(str, index);

            expect(actual).to.equal(expected);
        });
    });

    describe('Invalid tests', () => {
        it('Object and Array should return undefined', () => {
            const obj = {};
            const arr = [];

            const actual = lookupChar(obj, arr);

            expect(actual).to.equal(undefined);
        });

        it('String and String should return undefined', () => {
            const str = 'asd';
            const str1 = '5';

            const actual = lookupChar(str, str1);

            expect(actual).to.equal(undefined);
        });

        it('Number and Number should return undefined', () => {
            const num = 24;
            const num1 = 23;

            const actual = lookupChar(num, num1);

            expect(actual).to.equal(undefined);
        });

        it('String and Floating number should return undefined', () => {
            const str = 'asfd';
            const index = 3.14;

            const actual = lookupChar(str, index);

            expect(actual).to.equal(undefined);
        });

        it('Index bigger than the length of the String should return \'Incorrect index\'', () => {
            const str = 'asd';
            const index = 3;
            const expected = 'Incorrect index';

            const actual = lookupChar(str, index);

            expect(actual).to.equal(expected);
        });

        it('Index smaller than zero should return \'Incorrect index\'', () => {
            const str = 'dsa';
            const index = -1;
            const expected = 'Incorrect index';

            const actual = lookupChar(str, index);

            expect(actual).to.equal(expected);
        });
    });
});