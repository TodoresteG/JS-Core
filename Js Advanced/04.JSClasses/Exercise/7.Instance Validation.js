class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.product = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let pattern = /^[0-9]{6}$/g;

        if (pattern.test(value) === false) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let pattern = /[A-Za-z]{1,}\@[A-Za-z.]{1,}/g;

        if (pattern.test(value) === false) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let pattern = /^[A-Za-z]+$/g;

        if (value.length < 3 || value.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if (pattern.test(value) === false) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        let pattern = /^[A-Za-z]+$/g;

        if (value.length < 3 || value.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (pattern.test(value) === false) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = value;
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')