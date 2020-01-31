function solve() {
    let namePattern = /(\ [A-Z][a-z]+\-[A-Z][a-z]+\ |\ [A-Z][a-z]+\-[A-Z][a-z]+\.\-[A-Z][a-z]+\ )/ig;
    let airportPattern = /\ [A-Z]{3}\/[A-Z]{3}\ /ig;
    let flightNumberPattern = /\ [A-Z]{1,3}[0-9]{1,5}\ /ig;
    let companyPattern = /\-\ ([A-Z][a-z]*)\*([A-Z][a-z]*)\ /ig;

    let inputString = document.getElementById('string').value.split(', ');

    debugger;

    let passengerNameMatch = namePattern.exec(inputString[0]);
    let airportMatch = airportPattern.exec(inputString[0]);
    let flightNumberMatch = flightNumberPattern.exec(inputString[0]);
    let companyMatch = companyPattern.exec(inputString[0]);

    let name;
    let company;
    let flightNumber;
    let airports;

    if (passengerNameMatch) {
        name = passengerNameMatch[0].replace(/\-/g, ' ').trim();
    }

    if (airportMatch) {
        airports = airportMatch[0].split('/');
    }

    if (flightNumberMatch) {
        flightNumber = flightNumberMatch[0].trim();
    }

    if (companyMatch) {
        company = companyMatch[1] + ' ' + companyMatch[2];
    }


    let resultDiv = document.getElementById('result');
    let pElement = document.createElement('p');

    switch (inputString[1]) {
        case 'name':
            pElement.textContent = `Mr/Ms, ${name}, have a nice flight!`;
        break;
        case 'flight':
            pElement.textContent = `Your flight number ${flightNumber} is from ${airports[0].trim()} to ${airports[1].trim()}.`;
        break;
        case 'company':
            pElement.textContent = `Have a nice flight with ${company}.`;
        break;
        case 'all':
            pElement.textContent = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airports[0].trim()} to ${airports[1].trim()}. Have a nice flight with ${company}.`;
        break;
    }

    resultDiv.appendChild(pElement);
}