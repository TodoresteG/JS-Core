function addItem() {
    let textField = document.querySelector('#newItemText');
    let valueField = document.querySelector('#newItemValue');

    let selectMenu = document.querySelector('#menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = textField.value;
    optionElement.value = valueField.value;

    selectMenu.appendChild(optionElement);

    textField.value = '';
    valueField.value = '';
}