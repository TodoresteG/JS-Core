function loadRepos() {
	const displayError = function(err) {
		const li = document.createElement('li');
		li.textContent = err;
		repos.appendChild(li);
	};
	
	const createRepoItem = function(name, url) {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = url;
		a.textContent = name;
		li.appendChild(a);

		return li;
	};
	
	const displayRepos = function (repoItems) {
		repoItems.forEach(repo => {
			const { full_name, html_url } = repo;
			const repoItem = createRepoItem(full_name, html_url);
			repos.appendChild(repoItem);
		});
	};

	const inputElement = document.querySelector('#username').value;
	const repos = document.querySelector('#repos');
	repos.innerHTML = '';
	const url = `https://api.github.com/users/${inputElement}/repos`;

	fetch(url)
		.then(response => response.json())
		.then(data => displayRepos(data))
		.catch(err => displayError(err));
}