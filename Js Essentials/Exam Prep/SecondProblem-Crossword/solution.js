function solve() {
   let inputValue = document.getElementById('input');
   let filterFieldset = document.getElementById('filter');
   let filterButton = filterFieldset.getElementsByTagName('button')[0];
   let result = document.getElementById('output').getElementsByTagName('p')[0];

   filterButton.addEventListener('click', () => {
      let text = Array.from(inputValue.value);
      let selectElement = document.getElementById('filterSecondaryCmd');
      let position = document.getElementById('filterPosition').value;

      debugger;

      if (selectElement.value === 'uppercase') {
         text = text.filter(ch => ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90);
         result.textContent += text[position - 1];
      } else if (selectElement.value === 'lowercase') {
         text = text.filter(ch => ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122);
         result.textContent += text[position - 1];
      } else if (selectElement.value === 'nums') {
         text = text.filter(ch => ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57);
         result.textContent += text[position - 1];
      }

      inputValue.value = '';
   });

   let sortFieldset = document.getElementById('sort');
   let sortButton = sortFieldset.getElementsByTagName('button')[0];

   sortButton.addEventListener('click', () => {
      let text = Array.from(inputValue.value);
      let selectElement = document.getElementById('sortSecondaryCmd');
      let position = document.getElementById('sortPosition').value;

      if (selectElement.value === 'A') {
         text = text.sort((a, b) => {
            return a.localeCompare(b);
         });

         result.textContent += text[position - 1];
      } else if (selectElement.value === 'Z') {
         text = text.sort((a, b) => {
            return b.localeCompare(a);
         });

         result.textContent += text[position - 1];
      }

      inputValue.value = '';
   });

   let rotateFieldset = document.getElementById('rotate');
   let rotateButton = rotateFieldset.getElementsByTagName('button')[0];

   rotateButton.addEventListener('click', () => {
      let text = Array.from(inputValue.value);
      let rotations = document.getElementById('rotateSecondaryCmd').value;
      let position = document.getElementById('rotatePosition').value;

      for (let i = 0; i < rotations; i++) {
         let lastElement = text.pop();
         text.unshift(lastElement);
      }

      result.textContent += text[position - 1];
      inputValue.value = '';
   });

   let getFieldset = document.getElementById('get');
   let getButton = getFieldset.getElementsByTagName('button')[0];

   getButton.addEventListener('click', () => {
      let text = Array.from(inputValue.value);
      let position = document.getElementById('getPosition').value;
      result.textContent += text[position - 1];
      inputValue.value = '';
   });
}