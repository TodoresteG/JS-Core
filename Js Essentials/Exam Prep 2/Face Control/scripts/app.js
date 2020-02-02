function coffeeStorage() {
    let textareaValue = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    let database = new Map();

    for (let element of textareaValue) {
        let tokens = element.split(', ').filter(x => x !== '');

        let command = tokens[0];

        if (command === 'IN') {
            let brand = tokens[1];
            let coffeeName = tokens[2];
            let expireDate = tokens[3];
            let quantity = parseInt(tokens[4]);

            let coffeeObj = {
                'name': coffeeName,
                'expireDate': expireDate,
                'quantity': quantity
            };

            if (database.has(brand) === false) {
                database.set(brand, [coffeeObj]);
            } else {
                let coffeeTypes = database.get(brand);

                let match = coffeeTypes.find(x => x.name === coffeeName);

                if (match) {
                    if (match.expireDate === expireDate) {
                        match.quantity += quantity;
                    } else if (match.expireDate < expireDate) {
                        match.expireDate = expireDate;
                    }
                } else {
                    coffeeTypes.push(coffeeObj);
                }
            }
        } else if (command === 'OUT') {
            let brand = tokens[1];
            let coffeeName = tokens[2];
            let expireDate = tokens[3];
            let quantity = parseInt(tokens[4]);

            if (database.has(brand)) {
                let coffeeTypes = database.get(brand);
                let match = coffeeTypes.find(x => x.name === coffeeName);

                if (match) {
                    if (match.expireDate > expireDate && match.quantity >= quantity) {
                        match.quantity -= quantity;
                    }
                }
            }
        } else if (command === 'REPORT') {
            let reportP = document.getElementsByTagName('div')[0].getElementsByTagName('p')[0];

            for (let [key, value] of database) {
                reportP.innerHTML += `${key}:`;

                for (let element of value) {
                    reportP.innerHTML += ` ${element.name} - ${element.expireDate} - ${element.quantity}.`;
                }

                let newLine = document.createElement('br');
                reportP.appendChild(newLine);
            }
        } else if (command === 'INSPECTION') {
            let inspectionP = document.getElementsByTagName('div')[1].getElementsByTagName('p')[0];

            let sortedByKeys = new Map([...database.entries()].sort((a, b) => {
                return a[0].localeCompare(b[0])
            }));

            for (let [key, value] of sortedByKeys) {
                inspectionP.innerHTML += `${key}:`;

                debugger;
                const sortedInfo = value.sort((a, b) => {
                    return b.quantity - a.quantity
                });
                console.log(sortedInfo);
            
                for (let element of sortedInfo) {
                    inspectionP.innerHTML += ` ${element.name} - ${element.expireDate} - ${element.quantity}.`;
                }

                let newLine = document.createElement('br');
                inspectionP.appendChild(newLine);
            }
        }
    }
}function coffeeStorage() {
    let textareaValue = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    let database = new Map();

    for (let element of textareaValue) {
        let tokens = element.split(', ').filter(x => x !== '');

        let command = tokens[0];

        if (command === 'IN') {
            let brand = tokens[1];
            let coffeeName = tokens[2];
            let expireDate = tokens[3];
            let quantity = parseInt(tokens[4]);

            let coffeeObj = {
                'name': coffeeName,
                'expireDate': expireDate,
                'quantity': quantity
            };

            if (database.has(brand) === false) {
                database.set(brand, [coffeeObj]);
            } else {
                let coffeeTypes = database.get(brand);

                let match = coffeeTypes.find(x => x.name === coffeeName);

                if (match) {
                    if (match.expireDate === expireDate) {
                        match.quantity += quantity;
                    } else if (match.expireDate < expireDate) {
                        match.expireDate = expireDate;
                    }
                } else {
                    coffeeTypes.push(coffeeObj);
                }
            }
        } else if (command === 'OUT') {
            let brand = tokens[1];
            let coffeeName = tokens[2];
            let expireDate = tokens[3];
            let quantity = parseInt(tokens[4]);

            if (database.has(brand)) {
                let coffeeTypes = database.get(brand);
                let match = coffeeTypes.find(x => x.name === coffeeName);

                if (match) {
                    if (match.expireDate > expireDate && match.quantity >= quantity) {
                        match.quantity -= quantity;
                    }
                }
            }
        } else if (command === 'REPORT') {
            let reportP = document.getElementsByTagName('div')[0].getElementsByTagName('p')[0];

            for (let [key, value] of database) {
                reportP.innerHTML += `${key}:`;

                for (let element of value) {
                    reportP.innerHTML += ` ${element.name} - ${element.expireDate} - ${element.quantity}.`;
                }

                let newLine = document.createElement('br');
                reportP.appendChild(newLine);
            }
        } else if (command === 'INSPECTION') {
            let inspectionP = document.getElementsByTagName('div')[1].getElementsByTagName('p')[0];

            let sortedByKeys = new Map([...database.entries()].sort((a, b) => {
                return a[0].localeCompare(b[0])
            }));

            for (let [key, value] of sortedByKeys) {
                inspectionP.innerHTML += `${key}:`;

                const sortedInfo = value.sort((a, b) => {
                    return b.quantity - a.quantity
                });
            
                for (let element of sortedInfo) {
                    inspectionP.innerHTML += ` ${element.name} - ${element.expireDate} - ${element.quantity}.`;
                }

                let newLine = document.createElement('br');
                inspectionP.appendChild(newLine);
            }
        }
    }
}