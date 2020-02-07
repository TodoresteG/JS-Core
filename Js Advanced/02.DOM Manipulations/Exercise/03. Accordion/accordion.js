function toggle() {
    let buttonElement = document.querySelector('.button');
    let extra = document.querySelector('#extra');

    if (buttonElement.textContent === 'More') {
        extra.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else if (buttonElement.textContent === 'Less') {
        extra.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}