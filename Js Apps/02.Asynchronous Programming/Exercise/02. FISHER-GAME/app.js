function attachEvents() {
    const deleteCatch = function(ev) {
        const parentElement = ev.target.parentElement;
        const dataId = parentElement.getAttribute('data-id');

        const url = `https://fisher-game.firebaseio.com/catches/${dataId}.json`;

        fetch(url, {
            method: 'DELETE'
        });

        catchesDiv.removeChild(parentElement);
    };
    
    const updateCatch = function (ev) {
        const parentElement = ev.target.parentElement;
        const dataId = parentElement.getAttribute('data-id');

        const url = `https://fisher-game.firebaseio.com/catches/${dataId}.json`;

        const anglerInput = parentElement.querySelector('.angler');
        const weightInput = parentElement.querySelector('.weight');
        const speciesInput = parentElement.querySelector('.species');
        const locationInput = parentElement.querySelector('.location');
        const baitInput = parentElement.querySelector('.bait');
        const captureTimeInput = parentElement.querySelector('.captureTime');

        const newCatch = {
            'angler': anglerInput.value,
            'weight': weightInput.value,
            'species': speciesInput.value,
            'location': locationInput.value,
            'bait': baitInput.value,
            'captureTime': captureTimeInput.value
        };

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(newCatch)
        });
    };

    const createCatch = function (ev) {
        const url = `https://fisher-game.firebaseio.com/catches.json`;

        const anglerInput = document.querySelector('#addForm .angler');
        const weightInput = document.querySelector('#addForm .weight');
        const speciesInput = document.querySelector('#addForm .species');
        const locationInput = document.querySelector('#addForm .location');
        const baitInput = document.querySelector('#addForm .bait');
        const captureTimeInput = document.querySelector('#addForm .captureTime');

        const newCatch = {
            'angler': anglerInput.value,
            'weight': weightInput.value,
            'species': speciesInput.value,
            'location': locationInput.value,
            'bait': baitInput.value,
            'captureTime': captureTimeInput.value
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(newCatch)
        });

        loadCatches();

        anglerInput.value = '';
        weightInput.value = '';
        speciesInput.value = '';
        locationInput.value = '';
        baitInput.value = '';
        captureTimeInput.value = '';

    };

    const displayCatches = function (data) {
        const exampleCatch = document.querySelector('.catch');
        const layoutCatchDiv = exampleCatch.cloneNode(true);

        document.querySelector('#catches').innerHTML = '';

        for (const element in data) {
            const catchDiv = layoutCatchDiv.cloneNode(true);

            catchDiv.setAttribute('data-id', element);

            catchDiv.querySelector('.angler').value = data[element].angler;
            catchDiv.querySelector('.weight').value = data[element].weight;
            catchDiv.querySelector('.species').value = data[element].species;
            catchDiv.querySelector('.location').value = data[element].location;
            catchDiv.querySelector('.bait').value = data[element].bait;
            catchDiv.querySelector('.captureTime').value = data[element].captureTime;

            const updateButton = catchDiv.querySelector('.update');
            const deleteButton = catchDiv.querySelector('.delete');

            updateButton.addEventListener('click', updateCatch);
            deleteButton.addEventListener('click', deleteCatch);

            catchesDiv.appendChild(catchDiv);
        }
    };

    const loadCatches = function (ev) {
        const url = `https://fisher-game.firebaseio.com/catches.json`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayCatches(data));
    };

    const catchesDiv = document.querySelector('#catches');
    const loadButton = document.querySelector('.load');
    const addButton = document.querySelector('.add');

    loadButton.addEventListener('click', loadCatches);
    addButton.addEventListener('click', createCatch);
}

attachEvents();