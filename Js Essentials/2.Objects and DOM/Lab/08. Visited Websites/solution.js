function solve() {
  let links = document.querySelectorAll('.link-1');

  for (let i = 0; i < links.length; i++) {
    let currentLink = links[i];

    currentLink.addEventListener('click', function() {
      let paragraph = currentLink.getElementsByTagName('p')[0];

      let paragraphTextContent = paragraph.textContent.split(' ');

      let numberOfVisitedTimes = Number(paragraphTextContent[1]);

      numberOfVisitedTimes++;

      paragraph.textContent = `Visited: ${numberOfVisitedTimes} times`;
    });
  }
}