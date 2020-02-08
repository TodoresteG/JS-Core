class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() {
        let count = 0;

        for (const prop in this.kids) {
            count += this.kids[prop].length;
        }

        return count;
    }

    registerChild(name, grade, budget) {
        if (this.kids.hasOwnProperty(grade) === false) {
            this.kids[grade] = [];
        }

        if (budget >= this.budget) {
            if (this.kids[grade].includes(`${name}-${budget}`)) {
                return `${name} is already in the list for this ${this.destination} vacation.`
            }

            this.kids[grade].push(`${name}-${budget}`);
            return this.kids[grade];
        }

        return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
    }

    removeChild(name, grade) {
        const currentGrade = this.kids[grade];

        if (currentGrade) {
            const pattern = /^[A-Za-z]+/g;
            let indexToRemove = -1;

            for (let i = 0; i < currentGrade.length; i++) {
                let kidName = pattern.exec(currentGrade[i])[0];

                if (kidName === name) {
                    indexToRemove = i;
                    break;
                }
            }

            if (indexToRemove > -1) {
                this.kids[grade].splice(indexToRemove, 1);
                return this.kids[grade];
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        const sortedKeys = Object.keys(this.kids).sort((a, b) => {
            return a - b;
        });

        for (const element of sortedKeys) {

            if (this.kids[element].length > 0) {
                result += `Grade: ${element}\n`;
            }

            for (let i = 0; i < this.kids[element].length; i++) {
                result += `${i + 1}. ${this.kids[element][i]}\n`;
            }

        }

        return result;
    }
}

let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
vacation.registerChild('Gosho', 5, 3000);
vacation.registerChild('Lilly', 6, 1500);
vacation.registerChild('Pesho', 7, 4000);
vacation.registerChild('Tanya', 5, 5000);
vacation.registerChild('Mitko', 10, 5500)
console.log(vacation.toString());
