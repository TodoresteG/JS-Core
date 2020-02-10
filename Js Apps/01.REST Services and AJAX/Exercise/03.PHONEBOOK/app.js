function attachEvents() {
    const createContact = function (ev) {
        const personInput = document.querySelector('#person');
        const phoneInput = document.querySelector('#phone');

        const url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;
        const data = {
            'person': personInput.value,
            'phone': phoneInput.value
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        loadPhonebook();

        personInput.value = '';
        phoneInput.value = '';
    };

    const deleteNumber = function (ev) {
        const key = ev.target.parentElement.id;
        const parent = ev.target.parentElement;
        const url = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`;

        phonebook.removeChild(parent);

        fetch(url, { method: 'DELETE' });
    };

    const displayContacts = function (data) {
        for (const element in data) {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.textContent = 'Delete';
            btn.addEventListener('click', deleteNumber);
            li.textContent = `${data[element].person}: ${data[element].phone}`;
            li.id = element;
            li.appendChild(btn);
            phonebook.appendChild(li);
        }
    };

    const loadPhonebook = function (ev) {
        const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';
        phonebook.innerHTML = '';

        fetch(url)
            .then(response => response.json())
            .then(data => displayContacts(data));
    };

    const phonebook = document.querySelector('#phonebook');
    const btnLoad = document.querySelector('#btnLoad');
    const btnCreate = document.querySelector('#btnCreate');

    btnLoad.addEventListener('click', loadPhonebook);
    btnCreate.addEventListener('click', createContact);
}

attachEvents();