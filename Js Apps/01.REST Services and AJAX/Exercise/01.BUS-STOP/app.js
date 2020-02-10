function getInfo() {
    const displayError = function () {
        stopName.textContent = 'Error';
        buses.innerHTML = '';
    };

    const verifyResponse = function (response) {
        if (response.status !== 200) {
            return;
        }

        return response.json();
    };

    const displayBuses = function (data) {
        stopName.textContent = data.name;

        for (const bus in data.buses) {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
            buses.appendChild(li);
        }
    };

    const stopName = document.querySelector('#stopName');
    const buses = document.querySelector('#buses');
    const stopID = document.querySelector('#stopId').value;
    const url = `https://judgetests.firebaseio.com/businfo/${stopID}.json`;

    fetch(url)
        .then(response => verifyResponse(response))
        .then(data => displayBuses(data))
        .catch(displayError());

    document.querySelector('#stopId').value = '';
}