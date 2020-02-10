function solve() {
    //there in no input element - can't figure out what kind of error can occur
    //bug free app haha
    const desplayArrive = function (data) {
        const info = document.querySelector('.info');
        info.textContent = `Arriving at ${data.name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
        currentId = data.next;
    };

    const displayDepart = function (data) {
        const info = document.querySelector('.info');
        info.textContent = `Next stop ${data.name}`;
        departButton.disabled = true;
        arriveButton.disabled = false;
    };

    function depart() {
        const url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayDepart(data));
    }

    function arrive() {
        const url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;

        fetch(url)
            .then(response => response.json())
            .then(data => desplayArrive(data));
    }

    let currentId = 'depot';
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');

    return {
        depart,
        arrive
    };
}

let result = solve();