function solve() {
  let buttons = document.getElementsByTagName('button');
  let textAreaElement = document.getElementsByTagName('textarea');
  let tableElement = document.querySelector('.table');
  let tBodyElement = tableElement.getElementsByTagName('tbody')[0];

  let generateButton = buttons[0];
  let generateTextArea = textAreaElement[0];

  let buyButton = buttons[1];
  let infoTextArea = textAreaElement[1];

  buyButton.addEventListener('click', function() {
    let clickedCheckBox = tBodyElement.getElementsByTagName('input');
    let furnitureNames = [];
    let totalMoney = 0;
    let averageFactor = 0;
    let counter = 0;

    for (let i = 0; i < clickedCheckBox.length; i++) {
      let currentCheckBox = clickedCheckBox[i];

      if (currentCheckBox.checked) {
        let currentCol = currentCheckBox.parentNode;
        let currentRow = currentCol.parentNode;
        let cols = currentRow.getElementsByTagName('td');

        let name = cols[1].textContent;
        let price = Number(cols[2].textContent);
        let factor = Number(cols[3].textContent);

        if (furnitureNames.includes(name) === false) {
          furnitureNames.push(name);
        }

        totalMoney += price;
        averageFactor += factor;
        counter++;
      }
    }

    averageFactor /= counter;

    infoTextArea.textContent += `Bought furniture: ${furnitureNames.join(' ')}\n`;
    infoTextArea.textContent += `Total price: ${totalMoney.toFixed(2)}\n`;
    infoTextArea.textContent += `Average decoration factor: ${averageFactor.toFixed(1)}`;
  });

  generateButton.addEventListener('click', function() {
    let commandFromTextArea = generateTextArea.value;
    let parsedInput = JSON.parse(commandFromTextArea);
    let furnitureObj = parsedInput[0]; // might bug

    let newRow = document.createElement('tr');
    
    let imageTd = document.createElement('td');
    let nameTd = document.createElement('td');
    let priceTd = document.createElement('td');
    let decFactorTd = document.createElement('td');
    let checkBoxTd = document.createElement('td');
    let inputTag = document.createElement('input');
    inputTag.type = 'checkbox';
    checkBoxTd.appendChild(inputTag);

    let imageTag = document.createElement('img');
    imageTag.src = furnitureObj['img'];
    imageTd.appendChild(imageTag);

    nameTd.textContent = furnitureObj['name'];
    priceTd.textContent = furnitureObj['price'];
    decFactorTd.textContent = furnitureObj['decFactor'];

    newRow.appendChild(imageTd);
    newRow.appendChild(nameTd);
    newRow.appendChild(priceTd);
    newRow.appendChild(decFactorTd);
    newRow.appendChild(checkBoxTd);

    tBodyElement.appendChild(newRow);
  })
}