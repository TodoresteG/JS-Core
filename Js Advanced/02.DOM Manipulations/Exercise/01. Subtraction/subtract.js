function subtract() {
    let firstField = document.querySelector('#firstNumber');
    let seocndField = document.querySelector('#secondNumber');

    let firstNumber = Number(firstField.value);
    let secondNumber = Number(seocndField.value);

    firstField.disabled = false;
    seocndField.disabled = false;

    firstField.removeAttribute('value');
    seocndField.removeAttribute('value');

    let sum = firstNumber - secondNumber;

    let result = document.querySelector('#result');

    result.textContent = sum;
}