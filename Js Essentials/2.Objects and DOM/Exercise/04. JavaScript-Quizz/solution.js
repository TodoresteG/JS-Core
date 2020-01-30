function solve() {
  let sections = Array.from(document.getElementsByTagName('section'));

  let points = 0;
  
  for (let i = 0; i < sections.length; i++) {
    let currentSection = sections[i];

    let answerTexts = currentSection.querySelectorAll('.answer-text');

    for (let j = 0; j < answerTexts.length; j++) {
      let currentAnswerText = answerTexts[j];

      currentAnswerText.addEventListener('click', function(e) {
        let answerElement = e.target;
        let answer = answerElement.textContent;
    
        if (answer === 'onclick') {
          points += 1;
        }
        else if (answer === 'JSON.stringify()') {
          points += 1;
        }
        else if (answer === 'A programming API for HTML and XML documents') {
          points += 1;
        }

        currentSection.style.display = 'none';

        if (i < 2) {
          sections[i + 1].style.display = 'block';
        } else {
          let listElement = document.getElementById('results');
          listElement.style.display = 'block';

          if (points === 3) {
            let messageElement = listElement.getElementsByTagName('h1')[0];
            let message = document.createTextNode('You are recognized as top JavaScript fan!');

            messageElement.appendChild(message);
          }
          else {
            let message = document.createTextNode(`You have ${points} right answers`);
            let h1Element = listElement.getElementsByTagName('h1')[0];

            h1Element.appendChild(message);
          }
        }
      });
    }
  }
}