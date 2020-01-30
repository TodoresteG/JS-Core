function solve(foodsAndCalories) {

    let collectionOfFoods = new Map();

    for (let i = 0; i < foodsAndCalories.length - 1; i +=2) {
        let type = foodsAndCalories[i];
        let calories = foodsAndCalories[i + 1];

        let food = {type:type, calories: calories};

        collectionOfFoods.set(food.type, food.calories);
    }

    process.stdout.write('{ ');

    let i = 0;

     for (var [key, value] of collectionOfFoods) {
         if (i === collectionOfFoods.size - 1) {
            process.stdout.write(`${key}: ${value}`);
            break;
         }
         else {
             process.stdout.write(`${key}: ${value}, `);
             i++;
         }
        }

        process.stdout.write(' }');
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);