function solve(){
  let inputElement = document.getElementById('input');
  let inputValue = inputElement.textContent;

  let sentences = inputValue.split('.');

  let paragraph = document.createElement('p');

  let outputElement = document.getElementById('output');

  for (let i = 0; i < sentences.length - 1; i++) {
    if (i % 3 === 0) {
      outputElement.appendChild(paragraph);
      paragraph = document.createElement('p');
    }

    let sentence = document.createTextNode(sentences[i] + '.');
    paragraph.appendChild(sentence);
  }

  outputElement.appendChild(paragraph);
}