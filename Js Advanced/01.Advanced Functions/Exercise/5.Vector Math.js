let solution = {
    'add': function add(firstVector, secondVector) {
        let firstSum = firstVector[0] + secondVector[0];
        let secondSum = firstVector[1] + secondVector[1];
    
        return [firstSum, secondSum];
    },
    'multiply': function(vector, multiplier) {
        let firstNum = vector[0] * multiplier;
        let secondNum = vector[1] * multiplier;

        return [firstNum, secondNum];
    },
    'length': function(vector) {
        let firstNum = vector[0];
        let secondNum = vector[1];

        return Math.sqrt((firstNum * firstNum) + (secondNum * secondNum));
    },
    'dot': function (firstVector, secondVector) {
        return (firstVector[0] * secondVector[0]) + (firstVector[1] * secondVector[1]);
    },
    'cross': function(firstVector, secondVector) {
        return (firstVector[0] * secondVector[1]) - (firstVector[1] * secondVector[0]);
    }
};

console.log(solution.add([5.43, -1], [1, 31]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));