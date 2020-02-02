function solve(inputArgs) {
    let instructionsForCars = [];
    let parts = [];
    let carsWithParts = [];
    let repairedCars = [];

    for (let element of inputArgs) {
        let tokens = element.split(' ').filter(x => x !== '');
        let command = tokens[0];
        let car = tokens[1];

        switch (command) {
            case 'instructions':
                if (instructionsForCars.includes(car) === false) {
                    instructionsForCars.push(car);
                }
                break;
            case 'addPart':
                let part = tokens[2];
                let serialNumber = tokens[3];

                let obj = {
                    'model': car,
                    'part': part,
                    'serialNumber': serialNumber
                }

                parts.push(obj);
                break;
            case 'repair':
                let parsedJson = JSON.parse(tokens[2]);

                if (instructionsForCars.includes(car)) {
                    for (let kvp in parsedJson) {
                        if (parsedJson[kvp] === 'broken') {
                            for (let i = 0; i < parts.length; i++) {
                                let part = parts[i];

                                if (part.model === car && part.part === kvp) {
                                    parsedJson[kvp] = part.serialNumber;
                                    part.serialNumber = '';

                                    let stringifiedCar = JSON.stringify(parsedJson);
                                    console.log(`${car} client - ${stringifiedCar}`);
                                }
                            }
                        }
                    }
                } else {
                    console.log(`${car} is not supported`);
                }
                break;
        }
    }

    parts = parts.sort((a, b) => {
        a.model.localeCompare(b);
    });

    for (let part of parts) {
        console.log(`${part.model} - {"${part.part}":["${part.serialNumber}"]}`);
    }
}

solve([
    'instructions bmw',
    'addPart opel engine GV1399SSS',
    'addPart opel transmission SMF556SRG',
    'addPart bmw engine GV1399SSS',
    'addPart bmw transmission SMF444ORG',
    'addPart opel transmission SMF444ORG',
    'instructions opel',
    'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
    'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
]);