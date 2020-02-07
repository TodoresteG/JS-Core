function validate() {
    const validateEmail = (ev) => {
        let email = ev.target.value;
        let pattern = /^[a-z]+\@[a-z]+\.[a-z]+$/g;

        if (pattern.test(email) === false) {
            ev.target.className = 'error';
        } else {
            ev.target.className = '';
        }
    };
    
    let inputField = document.querySelector('#email');

    inputField.addEventListener('change', validateEmail);
}