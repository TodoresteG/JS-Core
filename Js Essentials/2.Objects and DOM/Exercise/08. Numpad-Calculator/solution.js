function solve() {
    let keysDivElement = document.getElementsByClassName('keys')[0];

    let buttonsHtmlCollection = keysDivElement.getElementsByTagName('button');
    let buttonsCollection = Array.from(buttonsHtmlCollection);
    let expressionOuputElement = document.getElementById('expressionOutput');
    let resultParagraph = document.getElementById('resultOutput');

    for (let i = 0; i < buttonsCollection.length; i++) {
        let currentButton = buttonsCollection[i];

        currentButton.addEventListener('click', clickButton);
    }

    let clearButton = document.querySelector('.clear');

    clearButton.addEventListener('click', clearEvent);

    function clearEvent() {
        expressionOuputElement.textContent = '';
        resultParagraph.textContent = '';
    }

    function clickButton(e) {
        let button = e.target;

        if (button.value === '=') {
            let pattern = /^(\d+(.\d+)?) (\+|-|\*|\/) (\d+(.\d+)?)$/;
            let match = pattern.exec(expressionOutput.textContent);
            
            if (match) {
                let result = 0;

                let first = Number(match[1]);
                let second = Number(match[4]);
                let operator = match[3];

                switch(operator) {
                    case '+': result = first + second; break;
                    case '-': result = first - second; break;
                    case '*': result = first * second; break;
                    case '/': result = first / second; break;
                }

                resultParagraph.textContent = result;
            }
            else {
                resultParagraph.textContent = 'NaN';
            }

        }
        else if (button.value === '+' || button.value === '-' ||
                 button.value === '*' || button.value === '/') {
            expressionOuputElement.textContent += ' ' + button.value + ' ';
        }
        else {
            expressionOuputElement.textContent += button.value;
        }
    }
}