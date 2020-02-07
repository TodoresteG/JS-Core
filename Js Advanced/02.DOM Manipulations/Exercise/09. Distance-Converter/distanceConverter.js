function attachEventsListeners() {
    const convert = (ev) => {
        let inputUnits = document.querySelector('#inputUnits');
        let outputUnits = document.querySelector('#outputUnits');

        let distance = Number(inputDistance.value);
        let distanceInMeters = 0;

        switch (inputUnits.value) {
            case 'km': distanceInMeters = distance * 1000; break;
            case 'm': distanceInMeters = distance; break;
            case 'cm': distanceInMeters = distance * 0.01; break;
            case 'mm': distanceInMeters = distance * 0.001; break;
            case 'mi': distanceInMeters = distance * 1609.34; break;
            case 'yrd': distanceInMeters = distance * 0.9144; break;
            case 'ft': distanceInMeters = distance * 0.3048; break;
            case 'in': distanceInMeters = distance * 0.0254; break;
        }

        let result = 0;

        switch (outputUnits.value) {
            case 'km': result = distanceInMeters / 1000; break;
            case 'm': result = distanceInMeters / 1; break;
            case 'cm': result = distanceInMeters / 0.01; break;
            case 'mm': result = distanceInMeters / 0.001; break;
            case 'mi': result = distanceInMeters / 1609.34; break;
            case 'yrd': result = distanceInMeters / 0.9144; break;
            case 'ft': result = distanceInMeters / 0.3048; break;
            case 'in': result = distanceInMeters / 0.0254; break;
        }

        outputDistance.value = result;
    };

    let convertButton = document.querySelector('#convert');
    let inputDistance = document.querySelector('#inputDistance');
    let outputDistance = document.querySelector('#outputDistance');

    convertButton.addEventListener('click', convert);
}