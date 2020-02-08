function solution() {
   const rebuildAKingdom = (ev) => {
      const kingdomName = createKingdomElement.querySelector('input').value.toLowerCase();
      const kingName = createKingdomElement.getElementsByTagName('input')[1].value;

      if (kingName.length >= 2 && validKingdomNames.includes(kingdomName)) {
         const htmlCastle = document.querySelector(`#${kingdomName}`);

         const h1 = document.createElement('h1');
         h1.textContent = kingdomName.toUpperCase();

         const divCastle = document.createElement('div');
         divCastle.className = 'castle';

         const h2 = document.createElement('h2');
         h2.className = 'kingName';
         h2.textContent = kingName.toUpperCase();

         const fieldset = document.createElement('fieldset');
         const legend = document.createElement('legend');
         legend.textContent = 'ARMY';
         fieldset.appendChild(legend);

         const keys = ['TANKS', 'FIGHTERS', 'MAGES'];

         for (let element of keys) {
            const p = document.createElement('p');
            p.className = element;
            p.setAttribute(element, 0);

            p.textContent = `${element} - ${p.getAttribute(element)}`;
            fieldset.appendChild(p);
         }

         const divArmyOutput = document.createElement('div');
         divArmyOutput.className = 'armyOutput';

         fieldset.appendChild(divArmyOutput);

         htmlCastle.appendChild(h1);
         htmlCastle.appendChild(divCastle);
         htmlCastle.appendChild(h2);
         htmlCastle.appendChild(fieldset);
         htmlCastle.style.display = 'inline-block';
      } else {
         createKingdomElement.querySelector('input').value = '';
      }
   };

   const joinKingdom = (ev) => {
      const radionButtons = Array.from(joinKingdomElement.querySelectorAll('input'));
      const kingdomElement = radionButtons.pop();
      const kingdomName = kingdomElement.value.toLowerCase();
      const characterName = radionButtons.pop().value;
      const checked = radionButtons.find(x => x.checked === true);
      
      if (checked && characterName.length >= 2 && validKingdomNames.includes(kingdomName)) {
         const kingdom = document.querySelector(`#${kingdomName}`);

         if (kingdom.style.display === 'inline-block') {
            const className = checked.value + 's';
            const pToUpdate = kingdom.querySelector(`.${className.toUpperCase()}`);
            let currentCount = parseInt(pToUpdate.getAttribute(className));
            currentCount += 1;
            pToUpdate.setAttribute(className.toUpperCase(), currentCount);

            pToUpdate.textContent = `${className.toUpperCase()} - ${pToUpdate.getAttribute(className)}`;

            const divArmyOutput = kingdom.querySelector('.armyOutput');
            divArmyOutput.textContent += characterName + ' ';
         }
      }

      if (validKingdomNames.includes(kingdomName) === false) {
         kingdomElement.value = '';
      }
   };

   const war = (ev) => {
      const attackerName = warKingdomElement.querySelector('input').value.toLowerCase();
      const defenderName = warKingdomElement.getElementsByTagName('input')[1].value.toLowerCase();

      const attacker = document.querySelector(`#${attackerName}`);

      if (!attacker) {
         warKingdomElement.querySelector('input').value = '';
      }

      const defender = document.querySelector(`#${defenderName}`);

      if (!defender) {
         warKingdomElement.getElementsByTagName('input')[1].value = '';
      }

      if (attacker && defender) {
         console.log();
         const attackingStats = {
            'TANKS': 20,
            'FIGHTERS': 50,
            'MAGES': 70,
         };
   
         const defenceStats = {
            'TANKS': 80,
            'FIGHTERS': 50,
            'MAGES': 30,
         };

         let attackerPoints = 0;
         let defenderPoints = 0;
         debugger;

         attackerPoints += calculatePoints(attacker, attackingStats, attackerPoints);
         defenderPoints += calculatePoints(defender, defenceStats, defenderPoints);

         if (attackerPoints > defenderPoints) {
            const winnerName = attacker.querySelector('.kingName');
            const nameToChange = defender.querySelector('.kingName');

            nameToChange.textContent = winnerName.textContent;
            console.log(winnerName);
         }
      }
   };

   const calculatePoints = (kingdom, stats, points) => {
      const fieldset = kingdom.querySelector('fieldset');
      const paragraphs = Array.from(fieldset.querySelectorAll('p'));

      for (const element of paragraphs) {
         const currentCount = parseInt(element.getAttribute(element.className.toLowerCase()));
         
         if (currentCount > 0) {
            points += currentCount * stats[element.className];
         }
      }

      return points;
   }

   const validKingdomNames = [
      'castle',
      'dungeon',
      'fortress',
      'inferno',
      'necropolis',
      'rampart',
      'stronghold',
      'tower',
      'conflux'
   ];

   const createKingdomElement = document.querySelector('#kingdom');
   const rebuildAKingdomButton = createKingdomElement.querySelector('button');

   rebuildAKingdomButton.addEventListener('click', rebuildAKingdom);

   const joinKingdomElement = document.querySelector('#characters');
   const joinButton = joinKingdomElement.querySelector('button');

   joinButton.addEventListener('click', joinKingdom);

   const warKingdomElement = document.querySelector('#actions');
   const warButton = warKingdomElement.querySelector('button');

   warButton.addEventListener('click', war);
}

window.onload = solution();