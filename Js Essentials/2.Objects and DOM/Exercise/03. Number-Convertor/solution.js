function solve() {
    let containerElement = document.getElementById('container');

    let selectMenuToElement = document.getElementById('selectMenuTo');

    let binaryOptionElement = document.createElement('option');

    binaryOptionElement.value = 'binary';

    let binaryText = document.createTextNode('Binary');

    binaryOptionElement.appendChild(binaryText);

    selectMenuToElement.appendChild(binaryOptionElement);

    let hexadecimalOptionElement = document.createElement('option');

    hexadecimalOptionElement.value = 'hexadecimal';

    let hexadecimalText = document.createTextNode('Hexadecimal');

    hexadecimalOptionElement.appendChild(hexadecimalText);

    selectMenuToElement.appendChild(hexadecimalOptionElement);

    let convertItButton = containerElement.getElementsByTagName('button')[0];

    convertItButton.addEventListener('click', function() {
        let inputNumberElement = document.getElementById('input');
        let inputNumberValue = Number(inputNumberElement.value);

        let resultElement = document.getElementById('result');

        if (selectMenuToElement.value === 'binary') {
            resultElement.value = inputNumberValue.toString(2);
        }
        else {
            resultElement.value = inputNumberValue.toString(16).toUpperCase();
        }
    });
}