function getFibonator() {
    let currentNumber = 0;
    let nextNumber = 1;

    const fib = function () {
        const result = nextNumber;
        let sum = currentNumber + nextNumber;
        currentNumber = nextNumber;
        nextNumber = sum;

        return result;
    }

    return fib;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13