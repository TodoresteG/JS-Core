function notify(message) {
    let divNotification = document.querySelector('#notification');
    divNotification.textContent = message;
    divNotification.style.display = 'block';
    
    setTimeout(() => {
        divNotification.textContent = '';
        divNotification.style.display = 'none';
    }, 2000);
}