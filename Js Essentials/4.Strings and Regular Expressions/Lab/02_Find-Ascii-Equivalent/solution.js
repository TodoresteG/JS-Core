function solve() {
  let inputFieldValue = document.getElementById('text').value;
  let resultSpanElement = document.getElementById('result');
  let resultWord = '';

  let tokens = inputFieldValue.split(' ');

  let wordRegex = /[A-Za-z]+/;

  for (let item of tokens) {
    if (item > 0) {
      let letter = String.fromCharCode(item);
      resultWord += letter;
    }

    if (item.match(wordRegex)) {
      let asciiValues = [];

      for (let i = 0; i < item.length; i++) {
        let asciiValue = item.charCodeAt(i);

        asciiValues.push(asciiValue);
      }
      
      let pElement = document.createElement('p');
      pElement.textContent = asciiValues.join(' ');

      resultSpanElement.appendChild(pElement);
    }
  }

  let pElement = document.createElement('p');
  pElement.textContent = resultWord;
  resultSpanElement.appendChild(pElement);
}