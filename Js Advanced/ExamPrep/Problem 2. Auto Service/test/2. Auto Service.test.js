const expect = require('chai').expect;
const AutoService = require('../02. Auto Service').AutoService;

describe('AutoService test', () => {
    it('AutoService should initialize with garageCapacity and two empty arrays', () => {
        const auto = new AutoService(10);
        const expectedCapacity = 10;
        const expectedArray = typeof [];

        const actualCapacity = auto.garageCapacity;
        const actualWork = typeof auto.workInProgress;
        const actualBacklog = typeof auto.backlogWork;

        expect(actualCapacity).to.be.equal(expectedCapacity);
        expect(actualWork).to.be.equal(expectedArray);
        expect(actualBacklog).to.be.equal(expectedArray);
    });

    it('Accessor availableSpace should return the available space left in the garage', () => {
        const auto = new AutoService(10);
        const expected = 10;

        const actual = auto.availableSpace;

        expect(actual).to.be.equal(expected);
    });

    it('signUpForReview should push current client in workInProgress list when availableSpace is bigger than 0', () => {
        const auto = new AutoService(10);
        const expected = 1;

        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        const actual = auto.workInProgress.length;

        expect(actual).to.be.equal(expected);
    });

    it('signUpForReview should push current client in backlog list when availableSpace is 0', () => {
        const auto = new AutoService(0);
        const expected = 1;

        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        const actual = auto.backlogWork.length;

        expect(actual).to.be.equal(expected);
    });

    it('carInfo should return object car when the car is present', () => {
        const auto = new AutoService(10);
        expected = JSON.stringify({
            'plateNumber': 'CA1234CA',
            'clientName': 'Peter',
            'carInfo': { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' }
        });

        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        const actual = JSON.stringify(auto.carInfo('CA1234CA', 'Peter'));

        expect(actual).to.be.equal(expected);
    });

    it('carInfo should return error message when car is not present', () => {
        const auto = new AutoService(10);
        const expected = 'There is no car with platenumber CA1234CA and owner Peter.';

        const actual = auto.carInfo('CA1234CA', 'Peter');

        expect(actual).to.be.equal(expected);
    });

    it('repairCar should return error message when there is no cars in the garage', () => {
        const auto = new AutoService(10);
        const expected = 'No clients, we are just chilling...';

        const actual = auto.repairCar();

        expect(actual).to.be.equal(expected);
    });

    it('repairCar should return message with repaired parts', () => {
        const auto = new AutoService(10);
        const expected = 'Your transmission and doors were repaired.';

        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'broken', 'doors': 'broken' });
        const actual = auto.repairCar();

        expect(actual).to.be.equal(expected);
    });

    it('repairCar should remove the repaired car form the working log', () => {
        const auto = new AutoService(10);
        const expected = 0;

        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'broken' });
        auto.repairCar();
        const actual = auto.workInProgress.length;

        expect(actual).to.be.equal(expected);
    });

    it('repairCar should return message when there are no parts to fix', () => {
        const auto = new AutoService(10);
        const expected = 'Your car was fine, nothing was repaired.';

        auto.signUpForReview('Peter', 'CA1234CA', { 'engine': 'MFRGG23', 'transmission': 'FF4418ZZ', 'doors': 'asdsad' });
        const actual = auto.repairCar();

        expect(actual).to.be.equal(expected);
    });
});