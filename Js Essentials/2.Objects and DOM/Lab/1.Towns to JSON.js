function solve(inputAsMatrix) {
    let regex = /[A-Za-z.0-9 ]+/g;
    let towns = [];

    let size = inputAsMatrix.length;

    for (let i = 1; i < size; i++) {
        let currentRow = inputAsMatrix[i];
        let tokens = currentRow.split('|');

        let townName = tokens[1].trim();
        let latitude = Number(tokens[2]);
        let longtitude = Number(tokens[3]);

        let townObj = {"Town":townName, "Latitude":latitude, "Longitude":longtitude};
        towns.push(townObj);
    }
    
    let jsonTextFormat = JSON.stringify(towns);

    console.log(jsonTextFormat);
}

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);