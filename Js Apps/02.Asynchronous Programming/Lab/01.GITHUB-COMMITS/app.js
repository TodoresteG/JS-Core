function loadCommits() {
    const displayError = function(err) {
        const li = document.createElement('li');
            li.textContent = err.message;
            commitsUl.appendChild(li);
    };
    
    const displayCommitMessages = function(data) {
        for(const element of data) {
            const li = document.createElement('li');
            li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
            commitsUl.appendChild(li);
        }

        usernameInput.value = '';
        repoInput.value = '';
    };

    const handler = function(response) {
        if (response.status >= 300) {
            throw new Error(`Error: ${response.status} (${response.statusText})`);
        }

        return response.json();
    };
    
    const usernameInput = document.querySelector('#username');
    const repoInput = document.querySelector('#repo');
    const commitsUl = document.querySelector('#commits');

    const url = `https://api.github.com/repos/${usernameInput.value}/${repoInput.value}/commits`;

    commitsUl.innerHTML = '';

    fetch(url)
    .then(response => handler(response))
    .then(data => displayCommitMessages(data))
    .catch(err => displayError(err));
}