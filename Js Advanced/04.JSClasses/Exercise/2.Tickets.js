function solve(ticketDescription, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let database = [];

    for (let element of ticketDescription) {
        const tokens = element.split('|').filter(x => x !== '');
        const destination = tokens[0];
        const price = parseFloat(tokens[1]);
        const status = tokens[2];

        const ticket = new Ticket(destination, price, status);
        database.push(ticket);
    }

    switch(sortingCriteria) {
        case 'destination':
            database = database.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            });
        break;
        case 'price':
            database = database.sort((a, b) => {
                return a.price - b.price;
            });
        break;
        case 'status':
            database = database.sort((a, b) => {
                return a.status.localeCompare(b.status);
            });
    }

    return database;
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));