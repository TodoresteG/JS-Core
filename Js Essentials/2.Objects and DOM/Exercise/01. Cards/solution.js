function solve() {
   let playerOneDivElement = document.getElementById('player1Div');
   let playerOneCards = playerOneDivElement.getElementsByTagName('img');

   for (let i = 0; i < playerOneCards.length; i++) {
      playerOneCards[i].addEventListener('click', clickEvent);
   }

   let playerTwoDivElement = document.getElementById('player2Div');
   let plyareTwoCards = playerTwoDivElement.getElementsByTagName('img');

   for (let i = 0; i < plyareTwoCards.length; i++) {
      plyareTwoCards[i].addEventListener('click', clickEvent);
   }

   let playerOneCardValue = -1;
   let playerTwoCardValue = -1;
   let playerOneCard = null;
   let playerTwoCard = null;

   function clickEvent() {
      this.src = 'images/whiteCard.jpg';
      let resultElement = document.getElementById('result');
      let firstSpan = resultElement.getElementsByTagName('span')[0];
      let secondSpan = resultElement.getElementsByTagName('span')[1];

      if (this.parentNode === playerOneDivElement) {
         let cardNameInText = document.createTextNode(this.name);
         playerOneCardValue = this.name;
         playerOneCard = this;
         firstSpan.appendChild(cardNameInText);
      }
      else {
         let cardNameInText = document.createTextNode(this.name);
         playerTwoCardValue = this.name;
         playerTwoCard = this;
         secondSpan.appendChild(cardNameInText);
      }

      if (playerOneCardValue > 0 && playerTwoCardValue > 0) {
         if (playerOneCardValue < playerTwoCardValue) {
            playerOneCard.style.border = '2px solid green';
            playerTwoCard.style.border = '2px solid red';
        }
        else if (playerTwoCardValue > playerOneCardValue) {
            playerOneCard.style.border = '2px solid red';
            playerTwoCard.style.border = '2px solid green';
        }

        let historyDiv = document.getElementById('history');
        let historyText = document.createTextNode(`[${playerOneCardValue} vs ${playerTwoCardValue}] `);
        historyDiv.appendChild(historyText);

        firstSpan.textContent = '';
        secondSpan.textContent = '';
      }
   }
}