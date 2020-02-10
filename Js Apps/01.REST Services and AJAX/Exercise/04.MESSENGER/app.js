function attachEvents() {
    const displayMessages = function(data) {
        messages.innerHTML = '';

        for(const element in data) {
            messages.textContent += `${data[element].author}: ${data[element].content}\n`;
        }
    }; 
    
    const refreshMessages = function(ev) {
        debugger;
        fetch(url)
        .then(response => response.json())
        .then(data => displayMessages(data));
    };

    const submitMessage = function(ev) {
        const authorInput = document.querySelector('#author');
        const contentInput = document.querySelector('#content');

        const data = {
            'author': authorInput.value,
            'content': contentInput.value
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });

        messages.textContent += `${data.author}: ${data.content}\n`;

        authorInput.value = '';
        contentInput.value = '';
    };
    
    const url = `https://rest-messanger.firebaseio.com/messanger.json`;
    const messages = document.querySelector('#messages');
    const submitButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');

    submitButton.addEventListener('click', submitMessage);
    refreshButton.addEventListener('click', refreshMessages);
}

attachEvents();