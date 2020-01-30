function solve(inputArgs) {
    let speed = inputArgs[0];
    let area = inputArgs[1];

    let overTheLimit = 0;

    switch (area) {
        case 'residential':
        if (speed <= 20) {
            return;
        }

        overTheLimit = speed - 20;
        break;
        case 'city': 
        if (speed <= 50) {
            return;
        }

        overTheLimit = speed - 50;
        break;
        case 'interstate':
        if (speed <= 90) {
            return;
        }

        overTheLimit = speed - 90;
        break;
        case 'motorway':
        if (speed <= 130) {
            return;
        }

        overTheLimit = speed - 130;
        break;
    }

    if (overTheLimit <= 20) {
        console.log('speeding');
    }
    else if (overTheLimit > 20 && overTheLimit <= 40) {
        console.log('excessive speeding');
    }
    else {
        console.log('reckless driving');
    }
}

solve([21, 'residential']);