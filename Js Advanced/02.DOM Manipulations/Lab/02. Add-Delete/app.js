function addItem() {
    let inputElement = document.querySelector('#newText');
    let ulElement = document.querySelector('#items');

    let liElement = document.createElement('li');
    liElement.textContent += inputElement.value + ' ';
    let aElement = document.createElement('a');

    aElement.href = '#';
    aElement.innerHTML = '[Delete]';

    aElement.addEventListener('click', () => {
        ulElement.removeChild(liElement);
    });

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);

    inputElement.value = '';
}