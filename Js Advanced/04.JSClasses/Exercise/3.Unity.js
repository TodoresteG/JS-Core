class Rat {
    constructor(name) {
        this.name = name;
        this._unitedList = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this._unitedList.push(otherRat);
        }
    }

    getRats() {
        return this._unitedList;
    }

    toString() {
        return `${this.name} \n ${this._unitedList.join('\n##')}`
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

//console.log(test.toString());
// Peter
// ##George
// ##Alex
