function solve(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }

    let inverseSum = 0;

    for(let i = 0; i < array.length; i++){
        inverseSum += 1 / array[i];
    }

    let concatenatedArray = "";

    for(let i = 0; i < array.length; i++){
        concatenatedArray += array[i];
    }

    console.log(sum);
    console.log(inverseSum);
    console.log(concatenatedArray);
}

solve([1, 2, 3]);