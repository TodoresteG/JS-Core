function calculate(number) {
    let sum = number;

    function add(nextNumber) {
        sum += nextNumber;
        return add;
    }

    add.toString = function () {
        return sum;
    };

    return add;
}

let test = calculate();

let another = test(2)(2);

console.log(another);