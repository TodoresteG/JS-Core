const expect = require('chai').expect;
const isSymmetric = require('../5.Check for Symmetry').isSymmetric;

describe('isSymetric tests', () => {
    describe('Valid test', () => {
        it('When array is passed as argument should return true', () => {
            const input = [];
            const expected = true;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });

        it('[1, 1, 1, 1] should be symetric and return true', () => {
            const input = [1, 1, 1, 1];
            const expected = true;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });

        it('[a, b, c, c, b, a] should be symetrical and return true', () => {
            const input = ['a', 'b', 'c', 'c', 'b', 'a'];
            const expected = true;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);;
        });

        it('[1, abc, {name:Todor}, {name:Todor}, abc, 1] should be symetrical and return true', () => {
            const input = [1, 'abc', {name:'Todor'}, {name:'Todor'}, 'abc', 1];
            const expected = true;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });
    });
    describe('Invalid tests', () => {
        it('When string is passed as argument should return false', () => {
            const input = 'Test';
            const expected = false;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });

        it('When object is passed as argument should return false', () => {
            const input = {};
            const expected = false;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });

        it('When number is passed as argument should return false', () => {
            const input = 7;
            const expected = false;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });

        it('When function is passed as argument should return false', () => {
            const input = function() {};
            const expected = false;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });

        it('[1, 2, 3, 4, 5] should not be symetric and return false', () => {
            const input = [1, 2, 3, 4, 5];
            const expected = false;

            const actual = isSymmetric(input);

            expect(actual).to.be.equal(expected);
        });
    });
});