const expect = require('chai').expect;
const rgbToHexColor = require('../6.RGB to Hex').rgbToHexColor;

describe ('RGB to Hex test', () => {
    describe ('Valid test', () => {
        it('RGB to Hex must return converted color black with valid input', () => {
            const expected = '#000000';

            const actual = rgbToHexColor(0, 0, 0);

            expect(actual).to.be.equal(expected);
        });

        it('RGB to Hex must return converted color white with valid input', () => {
            const expected = '#FFFFFF';

            const actual = rgbToHexColor(255, 255, 255);

            expect(actual).to.be.equal(expected);
        });
    });

    describe ('Invalid tests', () => {
        it('Red color should return undefined when it is not integer', () => {
            const input = 'sas';
            
            const actual = rgbToHexColor(input, 0, 0);

            expect(actual).to.equal(undefined, 'Red color must be an integer');
        });

        it('Red color should return undefined when it is negative integer', () => {
            const input = -1;

            const actual = rgbToHexColor(input, 0, 0);

            expect(actual).to.equal(undefined, 'Red color must be a positive integer');
        });

        it('Red color should return undefined when it is bigger than 255', () => {
            const input = 256;

            const actual = rgbToHexColor(input, 0, 0);

            expect(actual).to.equal(undefined, 'Red color must be smaller or equal than 255');
        });

        it('Red color should return undefined when it is a floating number', () => {
            const input = 3.21;

            const actual = rgbToHexColor(input, 0, 0);

            expect(actual).to.equal(actual, 'Red color has to be an integer');
        });

        it('Green color should return undefined when it is not integer', () => {
            const input = {};
            
            const actual = rgbToHexColor(0, input, 0);

            expect(actual).to.equal(undefined, 'Green color must be an integer');
        });

        it('Green color should return undefined when it is negative integer', () => {
            const input = -1;

            const actual = rgbToHexColor(0, input, 0);

            expect(actual).to.equal(undefined, 'Green color must be a positive integer');
        });

        it('Green color should return undefined when it is bigger than 255', () => {
            const input = 256;

            const actual = rgbToHexColor(0, input, 0);

            expect(actual).to.equal(undefined, 'Green color must be smaller or equal than 255');
        });

        it('Green color should return undefined when it is a floating number', () => {
            const input = 3.21;

            const actual = rgbToHexColor(0, input, 0);

            expect(actual).to.equal(actual, 'Green color has to be an integer');
        });

        it('Blue color should return undefined when it is not integer', () => {
            const input = [];
            
            const actual = rgbToHexColor(0, 0, input);

            expect(actual).to.equal(undefined, 'Blue color must be an integer');
        });

        it('Blue color should return undefined when it is negative integer', () => {
            const input = -1;

            const actual = rgbToHexColor(0, 0, input);

            expect(actual).to.equal(undefined, 'Blue color must be a positive integer');
        });

        it('Blue color should return undefined when it is bigger than 255', () => {
            const input = 256;

            const actual = rgbToHexColor(0, 0, input);

            expect(actual).to.equal(undefined, 'Blue color must be smaller or equal than 255');
        });

        it('Blue color should return undefined when it is a floating number', () => {
            const input = 3.21;

            const actual = rgbToHexColor(0, 0, input);

            expect(actual).to.equal(actual, 'Blue color has to be an integer');
        });
    });
});