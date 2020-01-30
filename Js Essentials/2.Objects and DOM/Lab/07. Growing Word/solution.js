let currentFontSize = 1;

let colors = ['blue', 'green', 'red'];
let i = 0;

function growingWord() {
  let exerciseElement = document.getElementById('exercise');
  let growingParagraph = exerciseElement.getElementsByTagName('p')[0];

  currentFontSize *= 2;

  growingParagraph.style.color = colors[i];
  growingParagraph.style.fontSize = currentFontSize + 'px';

  i++;

  if (i === 3) {
    i = 0;
  }
}