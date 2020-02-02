function solve() {
    let sections = Array.from(document.getElementsByTagName('section'));
    let resultDiv = document.getElementById('summary');
    let summaryButton = resultDiv.getElementsByTagName('button')[0];
    let textarea = document.getElementById('output');

    let stadium = {
        'profit': 0,
        'fans': 0
    };

    for (let section of sections) {
        let table = section.getElementsByTagName('table')[0];
        let rows = table.getElementsByTagName('tr');

        let sectors = [10, 7, 5];
        let names = ['A', 'B', 'C'];

        if (section.className === 'VIP') {
            sectors = [25, 15, 10];
        }

        for (let i = 1; i < rows.length; i++) {
            let currentRow = rows[i];
            let cols = currentRow.getElementsByTagName('button');

            for (let j = 0; j < cols.length; j++) {
                let currentCell = cols[j];
                currentCell.value = sectors[j];
                currentCell.name = 'true';
                currentCell.id = names[j];

                currentCell.addEventListener('click', () => {
                    let seatNumber = currentCell.textContent;
                    let sectorName = currentCell.id;

                    if (currentCell.name === 'true') {
                        textarea.textContent += ` Seat ${seatNumber} in zone ${section.className} sector ${sectorName} was taken.\n`;
                        currentCell.style.backgroundColor = 'rgb(255,0,0)';
                        currentCell.name = 'false';

                        stadium.profit += parseInt(currentCell.value);
                        stadium.fans++;

                    } else {
                        textarea.textContent += ` Seat ${seatNumber} in zone ${section.className} sector ${sectorName} is unavailable.\n`;
                    }
                });
                
            }
        }
    }

    summaryButton.addEventListener('click', () => {
        let resultSpan = resultDiv.getElementsByTagName('span')[0];

        resultSpan.textContent = `${stadium.profit} leva, ${stadium.fans} fans.`;
    });
}