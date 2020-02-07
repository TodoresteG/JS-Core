class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }

    }

    increase(length) {
        const sum = this.innerLength + length;
        this.innerLength = sum;
    }

    decrease(length) {
        const sum = this.innerLength - length;
        this.innerLength = sum;
    }

    toString() {
        const stringLength = this.innerString.length;

        if (stringLength > this.innerLength) {
            const cuttedWord = this.innerString.substr(0, this.innerLength);
            return `${cuttedWord}...`;
        }

        return this.innerString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

