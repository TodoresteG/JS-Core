function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let ulElement = document.querySelector('#items');

    let listItem = document.createElement('li');
    listItem.textContent = inputElement.value;
    ulElement.appendChild(listItem);
    inputElement.value = '';
}