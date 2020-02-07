//Need to fix this bullshit

function attachEventsListeners() {
    const convertTime = (ev) => {
        let parent = ev.target.parentElement;
        let inputElement = parent.querySelector('input');
        let targetId = ev.target.id;
        let id = targetId.substr(0, targetId.length - 3);

        let inputFields = Array.from(document.querySelectorAll('input'))
            .filter(x => x.type === 'text');

        let time = [];

        if (id === 'days') {
            time['days'] = +inputElement.value;
            time['hours'] = inputElement.value * 24;
            time['minutes'] = inputElement.value * 1440;
            time['seconds'] = inputElement.value * 86400;
        } else if (id === 'hours') {
            time['days'] = inputElement.value / 24;
            time['hours'] = +inputElement.value;
            time['minutes'] = inputElement.value * 60;
            time['seconds'] = inputElement.value * 3600;
        } else if (id === 'minutes') {
            time['days'] = inputElement.value / 1440;
            time['hours'] = inputElement.value / 60;
            time['minutes'] = +inputElement.value;
            time['seconds'] = inputElement.value * 60;
        } else if (id === 'seconds') {
            time['days'] = inputElement.value / 86400;
            time['hours'] = inputElement.value / 3600;
            time['minutes'] = inputElement.value / 60;
            time['seconds'] = +inputElement.value;
        }

        for (let i = 0; i < inputFields.length; i++) {
            let test = inputFields[i].parentElement.children[1];

            inputFields[i].value = time[test.id];
        }
    };

    let buttons = document.querySelectorAll('[value=Convert]');

    for (let element of [...buttons]) {
        element.addEventListener('click', convertTime);
    }
}