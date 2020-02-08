const test = (function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        if (typeof n === 'number' && n >= 0 && n < this.length) {
            const newArr = [];

            for (let i = n; i < this.length; i++) {
                newArr.push(this[i]);
            }

            return newArr;
        }
    };

    Array.prototype.take = function (n) {
        if (typeof n === 'number' && n >= 0 && n < this.length) {
            const newArr = [];

            for (let i = 0; i < n; i++) {
                newArr.push(this[i]);
            }

            return newArr;
        }
    };

    Array.prototype.sum = function () {
        let sum = 0;

        for (const element of this) {
            sum += element;
        }

        return sum;
    };

    Array.prototype.average = function () {
        const sum = this.sum();
        const average = sum / this.length;

        return average;
    }

    return this;
}())

console.log(test.last());
console.log(test.skip(2));
console.log(test.take(2));
console.log(test.sum());
console.log(test.average());
