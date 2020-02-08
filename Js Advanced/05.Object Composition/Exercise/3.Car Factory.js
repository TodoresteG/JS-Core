function solve(carObj) {
    const engines = {
        'small': {
            'power': 90,
            'volume': 1800
        },
        'normal': {
            'power': 120,
            'volume': 2400
        },
        'monster': {
            'power': 200,
            'volume': 3500
        }
    };

    const carriages = {
        'Hatchback': {
            'type': 'hatchback',
            'color': ''
        },
        'Coupe': {
            'type': 'coupe',
            'color': ''
        }
    };

    const car = {};

    car.model = carObj.model;

    for (const element in engines) {
        if (carObj.power <= engines[element].power) {
            car.engine = engines[element];
            break;
        }
    }

    for (const element in carriages) {
        if (carObj.carriage === carriages[element].type) {
            car.carriage = carriages[element];
            car.carriage.color = carObj.color;
            break;
        }
    }

    const wheels = [];
    const nearestOddNum = 2 * Math.round(carObj.wheelsize / 2) - 1;

    for (let i = 0; i < 4; i++) {
        wheels.push(nearestOddNum);
    }

    car.wheels = wheels;

    return car;
}

solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
);