function loadRepos() {
   const xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
         document.querySelector('#res').textContent = this.responseText;
      }
   };
   
   xhr.open('GET', 'https://api.github.com/users/testnakov/repos', true);
   xhr.send();
}