function deleteByEmail() {
    let tbodyElement = document.querySelector('tbody');
    let rows = Array.from(tbodyElement.querySelectorAll('tr'));
    let inputElement = document.querySelector('input');
    let resultElement = document.querySelector('#result');
    
    let hasFound = false;
    for (let element of rows) {
        let cols = Array.from(element.querySelectorAll('td'));

        for (let col of cols) {
            if (inputElement.value === col.textContent) {
                tbodyElement.removeChild(element);
                resultElement.textContent = 'Deleted.';
                hasFound = true;
            }
        }
    }

    if (hasFound === false) {
        resultElement.textContent = 'Not found.';
    }

    inputElement.value = '';
}