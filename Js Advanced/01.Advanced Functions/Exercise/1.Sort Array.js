function solve(arr, criteria) {
    if (criteria === 'asc') {
        arr = arr.sort((a, b) => {
            return a - b;
        });
    } else if (criteria === 'desc') {
        arr = arr.sort((a, b) => {
            return b - a;
        });
    }

    return arr;
}

solve([14, 7, 17, 6, 8], 'desc');