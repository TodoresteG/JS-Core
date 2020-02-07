const expect = require('chai').expect;
const sum = require('../4.Sum of Numbers');

describe('Array Sum', () => {
    describe('Valid Tests', () => {
        it('sum of [1, 2, 3, 1] should equal 7', () => {
            //Arrange
            const input = [1, 2, 3, 1];
            const expected = 7;
    
            //Act
            const actual = sum(input);
    
            //Assert
            expect(expected).to.equal(actual);
        });

        it ('sum of [-2, -4, -1, -9] should equal -16', () => {
            const input = [-2, -4, -1, -9];
            const expected = -16;

            const actual = sum(input);

            expect(expected).to.equal(actual);
        });

        it ('sum of [0, 0, 0, 0, 0, 0] should equal 0', () => {
            const input = [0, 0, 0, 0, 0, 0];
            const expected = 0;

            const actual = sum(input);

            expect(expected).to.equal(actual);
        });

        it ('sum of [2, 5, 3, -8] should equal 2', () => {
            const input = [2, 5, 3, -8];
            const expected = 2;

            const actual = sum(input);

            expect(expected).to.equal(actual);
        });

        it('[] should return 0', () => {
            const input = [];
            const expected = 0;

            const actual = sum(input);

            expect(expected).to.equal(actual);
        });

        it ('sum of [1, 2, t, 4] shoudl be NaN', () => {
            const input = [1, 2, 't', 4];

            const actual = sum(input);

            expect(actual).to.be.NaN;
        });
    });
});
