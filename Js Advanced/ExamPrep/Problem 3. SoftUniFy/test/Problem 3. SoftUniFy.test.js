const expect = require('chai').expect;
const SoftUniFy = require('../03. Softunify').SoftUniFy;

describe('SoftUniFy test', () => {
    //Valid test
    it('SoftUniFy should be initialized with property allSongs with value empty object', () => {
        const soft = new SoftUniFy();
        const expected = typeof {};

        const actual = typeof soft.allSongs;

        expect(actual).to.be.equal(expected);
    });

    it('downloadSong(artist, song, lyrics) should add song to allSongs with artist, rates, votes, song and lyrics', () => {
        const soft = new SoftUniFy();
        const obj = {
            'allSongs': {
                'GoshoOtPochivka': {
                    'rate': 0,
                    'votes': 0,
                    'songs': ['Za Ico Hazarta - Prosto momche']
                }
            }
        };
        const expected = JSON.stringify(obj);

        const download = soft.downloadSong('GoshoOtPochivka', 'Za Ico Hazarta', 'Prosto momche');
        const actual = JSON.stringify(download);

        expect(actual).to.be.equal(expected);
    });

    it('playSong(song) should find one song and return information about the song', () => {
        const soft = new SoftUniFy();
        const expected = 'BIG:\n' + 'Unbelivable - weed goes unbelivable\n';

        soft.downloadSong('BIG', 'Unbelivable', 'weed goes unbelivable');
        const actual = soft.playSong('Unbelivable');

        expect(actual).to.be.equal(expected);
    });

    it('playSong(song) should find two songs and return information about them', () => {
        const soft = new SoftUniFy();
        const expected = 'BIG:\n' + 'Unbelivable - weed goes unbelivable\n' + 'Test:\n' + 'Unbelivable - asdfewefc\n';

        soft.downloadSong('BIG', 'Unbelivable', 'weed goes unbelivable');
        soft.downloadSong('Test', 'Unbelivable', 'asdfewefc');
        const actual = soft.playSong('Unbelivable');

        expect(actual).to.be.equal(expected);
    });

    it('playSong(song) should return error message when the song is not present in allSongs property', () => {
        const soft = new SoftUniFy();
        const expected = 'You have not downloaded a BITCH song yet. Use SoftUniFy\'s function downloadSong() to change that!';

        soft.downloadSong('asddad', 'asdqwefdq', 'asdjaskbaskc');
        const actual = soft.playSong('BITCH');

        expect(actual).to.be.equal(expected);
    });

    it('playSong(song) should return error message when allSongs property is empty', () => {
        const soft = new SoftUniFy();
        const expected = 'You have not downloaded a Deam song yet. Use SoftUniFy\'s function downloadSong() to change that!';

        const actual = soft.playSong('Deam');

        expect(actual).to.be.equal(expected);
    });

    it('songsList should return all downloaded songs in allSongs property', () => {
        const soft = new SoftUniFy();
        const expected = 'Unbelivable - weed goes unbelivable\n' + 'Unbelivable - asdfewefc';

        soft.downloadSong('BIG', 'Unbelivable', 'weed goes unbelivable');
        soft.downloadSong('Test', 'Unbelivable', 'asdfewefc');
        const actual = soft.songsList;

        expect(actual).to.be.equal(expected);
    });

    it('songsList should return error message when allSongs property is empty', () => {
        const soft = new SoftUniFy();
        const expected = 'Your song list is empty';

        const actual = soft.songsList;

        expect(actual).to.be.equal(expected);
    });

    it('rateArtist(artist, rate) should rate the artist, give him one vote and return the avreage rate', () => {
        const soft = new SoftUniFy();
        const expected = 10;

        soft.downloadSong('BIG', 'Unbelivable', 'weed goes unbelivable');
        soft.rateArtist('BIG', 10);
        const actual = soft.rateArtist('BIG', 10);

        expect(actual).to.be.equal(expected);
    });

    it('rateArtist(artist) should return 0', () => {
        const soft = new SoftUniFy();
        const expected = 0;

        soft.downloadSong('BIG', 'Unbelivable', 'weed goes unbelivable');
        const actual = soft.rateArtist('BIG');

        expect(actual).to.be.equal(expected);
    });

    it('rateArtist() should return error message \'not found\'', () => {
        const soft = new SoftUniFy();
        const expected = 'The Galena is not on your artist list.';

        const actual = soft.rateArtist('Galena');

        expect(actual).to.be.equal(expected);
    });

    //Invalid test
});




// const test = new SoftUniFy();
// console.log(test.downloadSong('50Cent', 'I Don\'t know officer', 'sadkgk'));
// console.log(test.downloadSong('Eminem', 'Real Slim Shady', 'sadkasdsadsgk'));
// console.log(test.downloadSong('Nas', 'Ilmatic', 'sasaadkgk'));
// console.log(test.playSong('Ilmatic'));
// console.log(test.songsList);
// console.log(test.rateArtist('Eminem', 10));