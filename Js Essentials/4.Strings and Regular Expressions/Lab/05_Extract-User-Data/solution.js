function solve() {
    let inputFieldValue = document.getElementById('arr').value;
    let inputArr = JSON.parse(inputFieldValue);
    let resultSpanElement = document.getElementById('result');

    let extractName = (user) => {
        let namePattern = /^[A-Z][a-z]* [A-Z][a-z]* /;
        let match = user.match(namePattern);

        return match && match[0];
    };

    let extractPhoneNumber = (user) => {
        let numberPattern = /(\+359 \d \d{3} \d{3})|(\+359-\d-\d{3}-\d{3})/;
        let match = user.match(numberPattern);

        return match && match[0];
    };

    let extractEmail = (user) => {
        let emailPattern = / [a-z0-9]+\@[a-z]{1,}\.[a-z]{2,3}$/;
        let match = user.match(emailPattern);

        return match && match[0];
    };

    for (let user of inputArr) {
        let name = extractName(user);
        let phoneNumber = extractPhoneNumber(user);
        let email = extractEmail(user);

        let pElementForData = document.createElement('p');
        let pElementForDashes = document.createElement('p');

        if (!name || !phoneNumber || !email) {
            pElementForData.textContent = 'Invalid data';
            resultSpanElement.appendChild(pElementForData);
        } else {
            let pNumber = document.createElement('p');
            let pEmail = document.createElement('p');

            pElementForData.textContent += `Name: ${name}`;
            pNumber.textContent += `Phone Number: ${phoneNumber}`;
            pEmail.textContent += `Email: ${email}`;

            resultSpanElement.appendChild(pElementForData);
            resultSpanElement.appendChild(pNumber);
            resultSpanElement.appendChild(pEmail);
        }

        pElementForDashes.textContent = '- - -';
        resultSpanElement.appendChild(pElementForDashes);
    }
}