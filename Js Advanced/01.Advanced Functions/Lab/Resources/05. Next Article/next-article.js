function getArticleGenerator(input){
	let showNext = function () {
		if (input.length > 0) {
			let firstElement = input.shift();
			let content = document.querySelector('#content');
			let articleElement = document.createElement('article');
			articleElement.innerHTML = firstElement;
			content.appendChild(articleElement);
		}
	};

	return showNext;
}