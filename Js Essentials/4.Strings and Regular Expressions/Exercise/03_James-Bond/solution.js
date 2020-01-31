function solve() {
    function decodeWord(word) {
        while (word.indexOf('!') !== -1) {
            word = word.replace('!', '1');
        }

        while (word.indexOf('%') !== -1) {
            word = word.replace('%', '2');
        }

        while (word.indexOf('#') !== -1) {
            word = word.replace('#', '3');
        }

        while (word.indexOf('$') !== -1) {
            word = word.replace('$', '4');
        }

        return word.toLowerCase();
    }

    let inputArray = document.getElementById('array').value;
    let resultSpan = document.getElementById('result');
    let parsedArray = JSON.parse(inputArray);

    let specialKey = parsedArray[0];
    let pattern = new RegExp(`(?:^|\\s)(?:${specialKey})\\s+([A-Z!%$#]{8,})(?:\.|,|\\s|$)`, 'gi');

    for (let i = 1; i < parsedArray.length; i++) {
        let currentString = parsedArray[i];

        while (true) {
            let currentMatch = pattern.exec(currentString);

            if (currentMatch === null) {
                break;
            } else if (currentMatch[1].toUpperCase() === currentMatch[1]) {
                let decodedWord = decodeWord(currentMatch[1]);
                currentString = currentString.replace(currentMatch[1], decodedWord);
            }
        }

        let pElement = document.createElement('p');
        pElement.textContent = currentString;
        resultSpan.appendChild(pElement);
    }
}
