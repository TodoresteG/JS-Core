function create(words) {
   const showContent = (ev) => {
      let p = ev.target.firstElementChild;
      p.style.display = 'block';
   };
   
   let contentDiv = document.querySelector('#content');

   let divTemplate = document.createElement('div');
   let pTemplate = document.createElement('p');
   pTemplate.style.display = 'none';

   for (let word of words) {
      let div = divTemplate.cloneNode(true);
      let p = pTemplate.cloneNode(true);

      p.textContent = word;
      div.appendChild(p);

      div.addEventListener('click', showContent);
      contentDiv.appendChild(div);
   }
}