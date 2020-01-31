function solve() {
  let inputFieldElement = document.getElementById('text');
  let namingConventionField = document.getElementById('naming-convention');
  let resultElement = document.getElementById('result');

  let result = '';

  if (namingConventionField.value === 'Camel Case') {
    let words = inputFieldElement.value.split(' ');

    for (let i = 0; i < words.length; i++) {
      let current = words[i];

      if (i === 0) {
        result += current.toLowerCase();
      }
      else {
        let firstLetter = current.charAt(0).toUpperCase();
        current = current.slice(1).toLowerCase();

        firstLetter += current;

        result += firstLetter;
      }
    }
  }
  else if (namingConventionField.value === 'Pascal Case') {
    let words = inputFieldElement.value.split(' ');

    for (let i = 0; i < words.length; i++) {
      let current = words[i];

      let firstLetter = current.charAt(0).toUpperCase();
      current = current.slice(1).toLowerCase();

      firstLetter += current;

      result += firstLetter;
    }
  }
  else {
    resultElement.textContent = 'Error!';
    return;
  }

  resultElement.textContent = result;
}