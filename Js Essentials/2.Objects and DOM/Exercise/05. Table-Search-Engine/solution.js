function solve() {
   let table = document.querySelector('.container');

   let body = table.getElementsByTagName('tbody')[0];

   let trElements = body.getElementsByTagName('tr');

   let rows = Array.from(trElements);

   let searchField = document.getElementById('searchField');
   let searchButton = document.getElementById('searchBtn');

   searchButton.addEventListener('click', function() {
      for (let k = 0; k < rows.length; k++) {
         rows[k].className = '';
      }

      let searchValue = searchField.value;

      for (let i = 0; i < rows.length; i++) {
         let currentRow = rows[i];
   
         let tdElements = currentRow.getElementsByTagName('td');
         let cols = Array.from(tdElements);
   
         for (let j = 0; j < cols.length; j++) {
            let currentCol = cols[j].textContent.toLowerCase();

            if (currentCol.includes(searchValue)) {
               currentRow.className = 'select';
            }
         }
      }

      searchField.value = '';
   });
}