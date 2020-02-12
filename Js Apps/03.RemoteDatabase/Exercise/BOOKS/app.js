const kinveyUser = 'guest';
const kinveyPassword = 'guest';
const appKey = 'kid_HJ_PSCa-H';
const appSecret = '671493f1f8484fa59e6921d696093415';
const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/books`;

const elements = {
    loadBtn: document.querySelector('#loadBooks'),
    submitBtn: document.querySelector('.submit-btn'),
    doneBtn: document.querySelector('.done-btn'),
    tBody: document.querySelector('.books-body'),
    titleInput: document.querySelector('#title'),
    authorInput: document.querySelector('#author'),
    isbnInput: document.querySelector('#isbn'),
    h3Form: document.querySelector('.h3-form')
};

elements.loadBtn.addEventListener('click', loadBooks);
elements.submitBtn.addEventListener('click', createBook)

function loadBooks(ev) {
    const headers = {
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken')
    };

    fetch(baseUrl, headers)
        .then(handler)
        .then(displayAllBooks);
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error();
    }

    return response.json();
}

function displayAllBooks(data) {
    const exampleRow = document.querySelector('.books-body tr');
    const layoutRow = exampleRow.cloneNode(true);

    elements.tBody.innerHTML = '';

    for (const book of data) {
        const newTr = layoutRow.cloneNode(true);
        newTr.id = book._id;

        newTr.getElementsByTagName('td')[0].textContent = book.title;
        newTr.getElementsByTagName('td')[1].textContent = book.author;
        newTr.getElementsByTagName('td')[2].textContent = book.isbn;

        newTr.querySelector('.edit-btn').addEventListener('click', editBook);
        newTr.querySelector('.delete-btn').addEventListener('click', deleteBook);

        elements.tBody.appendChild(newTr);
    }
}

function createBook(ev) {
    ev.preventDefault();

    const title = elements.titleInput.value;
    const author = elements.authorInput.value;
    const isbn = elements.isbnInput.value;

    if (title && author && isbn) {
        const bookToCreate = { title, author, isbn };

        const headers = {
            method: 'POST',
            body: JSON.stringify(bookToCreate),
            credentials: 'include',
            Authorization: 'Basic ' + btoa(`${kinveyUser}:${kinveyPassword}`),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(baseUrl, headers)
            .then(handler)
            .then(loadBooks);

        clearInputFields(elements.isbnInput, elements.titleInput, elements.authorInput);
    }
}

function editBook(ev) {
    const bookToEdit = ev.target.parentElement.parentElement;

    elements.doneBtn.style.display = 'block';
    elements.submitBtn.style.display = 'none';
    elements.h3Form.textContent = 'EDIT BOOK';

    elements.titleInput.value = bookToEdit.querySelectorAll('td')[0].textContent;
    elements.authorInput.value = bookToEdit.querySelectorAll('td')[1].textContent;
    elements.isbnInput.value = bookToEdit.querySelectorAll('td')[2].textContent;


    elements.doneBtn.addEventListener('click', function (ev) {
        ev.preventDefault();

        const editUrl = `https://baas.kinvey.com/appdata/${appKey}/books/${bookToEdit.id}`;

        const title = elements.titleInput.value;
        const author = elements.authorInput.value;
        const isbn = elements.isbnInput.value;

        const editedBook = { title, author, isbn };

        const headers = {
            method: 'PUT',
            body: JSON.stringify(editedBook),
            credentials: 'include',
            Authorization: 'Kinvey ' + localStorage.getItem('authToken'),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch(editUrl, headers)
            .then(handler)
            .then(loadBooks);

        elements.doneBtn.style.display = 'none';
        elements.submitBtn.style.display = 'block';
        elements.h3Form.textContent = 'FORM';

        clearInputFields(elements.isbnInput, elements.titleInput, elements.authorInput);
    });
}

function deleteBook(ev) {
    const bookToDelete = ev.target.parentElement.parentElement;
    const deleteUrl = `https://baas.kinvey.com/appdata/${appKey}/books/${bookToDelete.id}`;

    const headers = {
        method: 'DELETE',
        credentials: 'include',
        Authorization: 'Kinvey ' + localStorage.getItem('authToken')
    };

    fetch(deleteUrl, headers)
        .then(handler)
        .then(loadBooks);
}

function clearInputFields() {
    for (const field of [...arguments]) {
        field.value = '';
    }
}