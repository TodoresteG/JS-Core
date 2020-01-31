function solve() {
    let keywordValue = document.getElementById('string').value;
    let inputValue = document.getElementById('text').value;
    let resultSpan = document.getElementById('result');

    let messagePattern = new RegExp(`${keywordValue}(.+)${keywordValue}`, 'ig');
    let message = `Message: ${messagePattern.exec(inputValue)[1]}`

    let locationPattern = /(north|east)[\s\S]*?(\d{2})[^,]*\,[^,]*?(\d{6})/ig;
    let eastDegrees;
    let northDegrees;

    let currentMatch = locationPattern.exec(inputValue);

    while (currentMatch) {
        if (currentMatch[1].toLowerCase() === 'east') {
            eastDegrees = `${currentMatch[2]}.${currentMatch[3]} E`;
        }
        else if (currentMatch[1].toLowerCase() === 'north') {
            northDegrees = `${currentMatch[2]}.${currentMatch[3]} N`;
        }

        currentMatch = locationPattern.exec(inputValue);
    }
    
    let northPElement = document.createElement('p');
    northPElement.textContent = northDegrees;

    let eastPElement = document.createElement('p');
    eastPElement.textContent = eastDegrees;

    let messagePElement = document.createElement('p');
    messagePElement.textContent = message;

    resultSpan.appendChild(northPElement);
    resultSpan.appendChild(eastPElement);
    resultSpan.appendChild(messagePElement);
}