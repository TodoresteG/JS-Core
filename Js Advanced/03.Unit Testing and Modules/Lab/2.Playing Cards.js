function makeCard (face, suit) {
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suites = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663' 
    };

    if (faces.includes(face) === false) {
        throw new Error(`Invalid card ${face + suit}`);
    }

    if (suites.hasOwnProperty(suit) === false) {
        throw new Error(`Invalid card ${face + suit}`);
    }

    const card = {
        'face': face,
        'suit': suites[suit],
        toString: function() {
            return this.face + this.suit;
        }
    };

    return card;
}

console.log(makeCard('A', 'S').toString());