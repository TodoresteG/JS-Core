function solve(wagonCapacity, people) {
    let train = [];
    train.length = people.length;
    let isFit = true;

    for (let i = 0; i < people.length; i++) {
        let passenger = people[i];

        if (people.length > train.length) {
            isFit = false;
            break;
        }

        if (passenger <= wagonCapacity) {
            train[i] = passenger;
        } else if (passenger > wagonCapacity) {
            train[i] = wagonCapacity;
            passenger -= wagonCapacity;

            if (i + 1 === people.length) {
                people.push(passenger);
            } else {
                people[i + 1] += passenger;
            }
        }
    }

    console.log(train);

    if (isFit) {
        console.log('All passengers aboard');
    } else {
        console.log(`Could not fit ${people.pop()} passengers`);
    }
}

solve(10, [9, 39, 1, 0, 0]);