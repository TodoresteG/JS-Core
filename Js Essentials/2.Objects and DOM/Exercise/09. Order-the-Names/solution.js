function solve() {
    let inputField = document.getElementsByTagName('input')[0];
    let addButton = document.getElementsByTagName('button')[0];

    addButton.addEventListener('click', function() {
        let inputFieldValue = inputField.value;

        let alphabeticalListItems = document.getElementsByTagName('li');

        let firstLetter = inputFieldValue[0].toLowerCase();
        let letterInAlphabet = firstLetter.charCodeAt(0) - 97;

        let currentListItem = alphabeticalListItems[letterInAlphabet];

        if (currentListItem.textContent) {
            let currentListItemValues = currentListItem.textContent.split(', ').filter(n => n !== '');
            
            currentListItemValues.push(inputFieldValue);
            currentListItem.textContent = currentListItemValues.join(', ');
        } 
        else {
            currentListItem.textContent = inputFieldValue;
        }

        inputField.value = '';
    });
}