const result = (function () {
    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (validFaces.includes(value) === false) {
                throw new Error('Invalid face!');
            }

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (objValues.includes(value) === false) {
                throw new Error('Invalid suit!');
            }
            
            this._suit = value;
        }
    }
    
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const Suits = {
        'SPADES': '\u2660',
        'HEARTS': '\u2665',
        'DIAMONDS': '\u2666',
        'CLUBS': '\u2663'
    };
    const objValues = Object.values(Suits);

    return {
        Suits: Suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let card1 = new Card("2",Suits.SPADES);
