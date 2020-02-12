const kinveyUser = 'guest';
const kinveyPass = 'guest';
const appKey = 'kid_BJXTsSi-e';
const appSecret = '447b8e7046f048039d95610c1b039390';

const containerDiv = document.querySelector('.container');

let url = `https://baas.kinvey.com/appdata/${appKey}/knock?query=Knock Knock.`;
const headers = {
    credentials: 'include',
    Authorization: 'Kinvey ' + localStorage.getItem('authToken')
};

let p = document.createElement('p');
p.textContent = 'Knock Knock.';

containerDiv.appendChild(p);

fetch(url, headers)
    .then(handler)
    .then(printSecretMessage);


function printSecretMessage(data) {
    p = document.createElement('p');
    p.textContent = data.answer;

    containerDiv.appendChild(p);

    if (data.message === undefined) {
        return;
    }


    p = document.createElement('p');
    p.textContent = data.message;

    containerDiv.appendChild(p);

    url = `https://baas.kinvey.com/appdata/${appKey}/knock?query=${data.message}`;

    fetch(url, headers)
        .then(handler)
        .then(printSecretMessage);
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(response.statusText);
    }

    return response.json();
}