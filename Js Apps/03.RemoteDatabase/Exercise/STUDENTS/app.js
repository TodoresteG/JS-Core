const kinveyUser = 'guest';
const kinveyPass = 'guest';
const appKey = 'kid_HJ_PSCa-H';
const appSecret = '671493f1f8484fa59e6921d696093415';
const baseUrl = `https://baas.kinvey.com/appdata/${appKey}/students`;

const tBody = document.querySelector('#results tbody');

const headers = {
    credentials: 'include',
    Authorization: 'Kinvey ' + localStorage.getItem('authToken')
};

fetch(baseUrl, headers)
    .then(handler)
    .then(displayStudents);

function handler(response) {
    if (response.status >= 400) {
        throw new Error('Status code is 400 or more!');
    }

    return response.json();
}

function displayStudents(data) {
    data = data.sort((a, b) => {
        return a.ID - b.ID;
    });

    for(const student of data) {
        const tr = document.createElement('tr');

        const idTd = document.createElement('td');
        idTd.textContent = student.ID;

        const firstNameTd = document.createElement('td');
        firstNameTd.textContent = student.FirstName;

        const lastNameTd = document.createElement('td');
        lastNameTd.textContent = student.LastName;

        const facultyNumberTd = document.createElement('td');
        facultyNumberTd.textContent = student.FacultyNumber;

        const gradeTd = document.createElement('td');
        gradeTd.textContent = student.Grade;

        tr.appendChild(idTd);
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(facultyNumberTd);
        tr.appendChild(gradeTd);

        tBody.appendChild(tr);
    }
}