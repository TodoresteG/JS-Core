function solve() {
    let inputValue = document.getElementById('input');
    let extractButton = document.getElementsByTagName('button')[0];
    let outputTextarea = document.getElementById('output');
    let result = '';

    extractButton.addEventListener('click', () => {
        let text = inputValue.value;
        let chToRemove = text.match(/^[0-9]+/)[0];

        text = text.substr(chToRemove.length, parseInt(chToRemove));
        let lastCh = text[text.length - 1];
        let tokens = text.split(lastCh).filter(x => x !== '');
        
        let pattern = new RegExp(`[^${tokens[0]}]`, 'g');
        let matches = tokens[1].match(pattern);

        for (let ch of matches) {
            if (ch === '#') {
                result += ' ';
            } else {
                result += ch;
            }
        }

        outputTextarea.textContent = result;
    });

}