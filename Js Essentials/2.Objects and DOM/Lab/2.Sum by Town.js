function solve(inputArgs) {
    let towns = [];

    for (let i = 0; i < inputArgs.length - 1; i += 2) {
        let name = inputArgs[i];
        let income = Number(inputArgs[i + 1]);

        let obj = towns.find(x => x.Name === name);

        if (obj) {
            obj.Income += income;
        }
        else {
            let townObj = {"Name":name, "Income":income};
            towns.push(townObj);
        }
    }

    for (let i = 0; i < towns.length; i++) {
        
    }

    let jsonText = JSON.stringify(towns);

    console.log(jsonText.Name);
}

solve(['Sofia',
    '20',
    'Varna',
    '3',
    'Sofia',
    '5',
    'Varna',
    '4'
    ]);