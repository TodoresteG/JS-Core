function lockedProfile() {
    const hideProfile = (ev) => {
        let buttonParent = ev.target.parentElement;
        let lock = buttonParent.children[2];

        if (lock.checked !== true) {
            let hiddenDiv = buttonParent.querySelector('div');
            hiddenDiv.style.display = 'none';
            ev.target.textContent = 'Show more';
        }
    };
    
    const showProfile = (ev) => {
        let buttonParent = ev.target.parentElement;
        let lock = buttonParent.children[2];

        if (lock.checked !== true) {
            let hiddenDiv = buttonParent.querySelector('div');
            hiddenDiv.style.display = 'block';
            ev.target.textContent = 'Hide it';

            ev.target.addEventListener('click', hideProfile);
        }
    };
    
    let profiles = document.querySelectorAll('.profile');
    let showMoreButtons = document.querySelectorAll('.profile button');

    for (let button of [...showMoreButtons]) {
        button.addEventListener('click', showProfile);
    }
}