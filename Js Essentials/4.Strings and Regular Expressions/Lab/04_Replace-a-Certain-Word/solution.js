function solve() {
    let wordValue = document.getElementById('word').value;
    let arrayOfStrings = document.getElementById('text').value;

    let tokens = JSON.parse(arrayOfStrings);

    let wordToReplace = tokens[0].split(' ')[2];
    let pattern = new RegExp(wordToReplace, 'ig');

    tokens = tokens.map(part => part.replace(pattern, wordValue))

    let resultElement = document.getElementById('result');

    for (let element of tokens) {
        let pElement = document.createElement('p');

        pElement.textContent = element;
        resultElement.appendChild(pElement);
    }
}