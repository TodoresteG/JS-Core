function solve() {
   const signMeUp = (ev) => {
      const checkBoxes = Array.from(document.querySelectorAll('input')).filter(x => x.type === 'checkbox');
      const chosenCourses = checkBoxes.filter(x => x.checked === true);

      const radioBoxes = Array.from(document.querySelectorAll('input')).filter(x => x.type === 'radio');
      const educationalForm = radioBoxes.find(x => x.checked === true);

      let totalMoney = 0;

      const signedCourses = {
         'js-fundamentals': false,
         'js-advanced': false,
         'js-applications': false,
         'js-web': false,
      };

      for (const element of chosenCourses) {
         totalMoney += coursePrices[element.value];
         signedCourses[element.value] = true;
         courses.push(element.value);
      }

      if (signedCourses['js-fundamentals'] && signedCourses['js-advanced']) {
         totalMoney -= coursePrices['js-advanced'] * 0.1;
      }

      if (signedCourses['js-fundamentals'] && signedCourses['js-advanced'] &&
         signedCourses['js-applications']) {
         const sum = coursePrices['js-fundamentals'] + coursePrices['js-advanced'] + coursePrices['js-applications'];
         totalMoney -= sum * 0.06;
      }

      if (signedCourses['js-fundamentals'] && signedCourses['js-advanced'] &&
         signedCourses['js-applications'] && signedCourses['js-web']) {
         courses.push('HTML and CSS');
      }

      if (educationalForm.value === 'online') {
         totalMoney -= totalMoney * 0.06;
      }

      for (const element of courses) {
         if (element === 'HTML and CSS') {
            const li = document.createElement('li');
            li.textContent = element;
            const ul = document.querySelector('#myCourses .courseBody ul');
            ul.appendChild(li);
            continue;
         }

         const li = document.createElement('li');
         let result = 'JS-';
         let text = element.substr(3);
         const firstLetter = text[0];
         text = text.substr(1);

         result += firstLetter.toUpperCase() + text;

         li.textContent = result;

         const ul = document.querySelector('#myCourses .courseBody ul');
         ul.appendChild(li);
      }

      const p = document.querySelector('#myCourses .courseFoot p');
      p.textContent = `Cost: ${Math.round(totalMoney.toFixed(2))} BGN`
   };

   const coursePrices = {
      'js-fundamentals': 170,
      'js-advanced': 180,
      'js-applications': 190,
      'js-web': 490,
   };

   const courses = [];

   const signMeUpButton = document.querySelector('button');

   signMeUpButton.addEventListener('click', signMeUp);
}

solve();