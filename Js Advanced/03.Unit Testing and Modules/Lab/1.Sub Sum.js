function solve (arr, startIndex, endIndex) {
    if (Array.isArray(arr) === false) {
        return NaN;
    }

    arr = arr.map(Number);
    startIndex = Math.max(0, startIndex);
    endIndex = Math.min(endIndex, arr.length);

    let subArr = arr.slice(startIndex, endIndex + 1);
    
    return subArr.reduce((r, e) => {
        return r + e;
    }, 0);
}

console.log(solve([10, 'twenty', 30, 40], 0, 2));