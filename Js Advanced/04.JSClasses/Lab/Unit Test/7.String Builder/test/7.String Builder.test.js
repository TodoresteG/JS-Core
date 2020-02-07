const expect = require('chai').expect;
const StringBuilder = require('../7.String Builder').StringBuilder;

describe('StringBuilder test', () => {
    describe('Valid test', () => {
        it('StringBuilder should initialize without passed argument', () => {
            const sb = new StringBuilder();
            const expected = '';

            const actual = sb.toString();

            expect(actual).to.be.equal(expected);
        });

        it('StringBuilder should initialize with passed string as argument', () => {
            const sb = new StringBuilder('abc');
            const expected = 'abc';

            const actual = sb.toString();

            expect(actual).to.be.equal(expected);
        });

        it('Append mehtod should append \'test\' at the end of the StringBuilder', () => {
            const sb = new StringBuilder('abc');
            const expected = 'abctest';

            sb.append('test');
            const actual = sb.toString();

            expect(actual).to.be.equal(expected);
        });

        it('Prepend method should prepend \'class\' at the begining of the StringBuilder', () => {
            const sb = new StringBuilder('JS');
            const expected = 'classJS';

            sb.prepend('class');
            const actual = sb.toString();

            expect(actual).to.be.equal(expected);
        });

        it('InsertAt method should insert \'dom\' at index 3', () => {
            const sb = new StringBuilder('manipulations');
            const expected = 'mandomipulations';

            sb.insertAt('dom', 3);
            const actual = sb.toString();

            expect(actual).to.be.equal(expected);
        });

        it('Remove method should remove elements from starting index 2 to end index 8', () => {
            const sb = new StringBuilder('tejkinokautimaina');
            const expected = 'tetimaina';

            sb.remove(2, 8);
            const actual = sb.toString();

            expect(actual).to.be.equal(expected);
        });
    });
    
    describe('Invalid test', () => {
        it('VerifyParam static method should verify if the passed in argument is a string', () => {
            expect(StringBuilder._vrfyParam(2)).to.throw();
        });
    });
});