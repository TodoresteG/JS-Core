function attachEvents() {
    const displayThreeDaysForecast = function(data) {
        const threeDayForecastDiv = document.querySelector('#upcoming');

        const forecastInfoDiv = document.createElement('div');
        forecastInfoDiv.className = 'forecast-info';

        for(const element of data.forecast) {
            const upcomingSpan = document.createElement('span');
            upcomingSpan.className = 'upcoming';
    
            const symbolSpan = document.createElement('span');
            symbolSpan.className = 'symbol';
            symbolSpan.innerHTML = weatherSymbols[element.condition];
    
            const temperatureSpan = document.createElement('span');
            temperatureSpan.className = 'forecast-data';
            temperatureSpan.innerHTML = `${element.low}&#176;/${element.high}&#176;`;

            const conditionSpan = document.createElement('span');
            conditionSpan.className = 'forecast-data';
            conditionSpan.textContent = element.condition;

            upcomingSpan.appendChild(symbolSpan);
            upcomingSpan.appendChild(temperatureSpan);
            upcomingSpan.appendChild(conditionSpan);

            forecastInfoDiv.appendChild(upcomingSpan);
        }

        threeDayForecastDiv.appendChild(forecastInfoDiv);
    };
    
    const displayCurrentForecast = function(data) {
        document.querySelector('#forecast').style.display = 'block';

        const currentForecastDiv = document.querySelector('#forecast #current');

        const forecastsDiv = document.createElement('div');
        forecastsDiv.className = 'forecasts';

        const conditionSymbolSpan = document.createElement('span');
        conditionSymbolSpan.className = 'condition symbol';

        conditionSymbolSpan.innerHTML = weatherSymbols[data.forecast.condition];

        const conditionSpan = document.createElement('span');
        conditionSpan.className = 'condition';

        const townSpan = document.createElement('span');
        townSpan.className = 'forecast-data';
        townSpan.textContent = data.name;

        const tempereatureSpan = document.createElement('span');
        tempereatureSpan.className = 'forecast-data';
        tempereatureSpan.innerHTML = `${data.forecast.low}&#176;/${data.forecast.high}&#176;`;

        const weatherSpan = document.createElement('span');
        weatherSpan.className = 'forecast-data';
        weatherSpan.textContent = data.forecast.condition;

        conditionSpan.appendChild(townSpan);
        conditionSpan.appendChild(tempereatureSpan);
        conditionSpan.appendChild(weatherSpan);

        forecastsDiv.appendChild(conditionSymbolSpan);
        forecastsDiv.appendChild(conditionSpan);

        currentForecastDiv.appendChild(forecastsDiv);
    };
    
    const getWeather = function(data) {
        const locationInput = document.querySelector('#location');
        const location = data.find(x => x.name === locationInput.value);
        
        if (!location) {
            throw new Error('Invalid location');
        }

        const urlForCurrent = `https://judgetests.firebaseio.com/forecast/today/${location.code}.json `;

        fetch(urlForCurrent)
        .then(response => handle(response))
        .then(data => displayCurrentForecast(data));

        const urlForThreeDays = `https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json`;

        fetch(urlForThreeDays)
        .then(response => handle(response))
        .then(data => displayThreeDaysForecast(data));
    };
    
    const getLocation = function(ev) {
        const url = `https://judgetests.firebaseio.com/locations.json`;

        fetch(url)
        .then(response => handle(response))
        .then(data => getWeather(data))
        .catch(err => console.log(err));
    };

    const handle = function(response) {
        if (response.status >= 300) {
            throw new Error(`${response.statusText}: ${response.status}`);
        }

        return response.json();
    };

    const weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;'
    };
    
    const submitBtn = document.querySelector('#submit');

    submitBtn.addEventListener('click', getLocation);
}

attachEvents();