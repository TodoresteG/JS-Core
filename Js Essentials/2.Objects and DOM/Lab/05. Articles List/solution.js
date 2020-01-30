function createArticle() {
	let createTitleValue = document.getElementById('createTitle').value;
	let createContentValue = document.getElementById('createContent').value;

	if (createTitleValue.length > 0 && createContentValue.length > 0) {
		let titleValue = document.createTextNode(createTitleValue);
		let contentValue = document.createTextNode(createContentValue);
	
		let titleValueH3Element = document.createElement('h3');
		let contentValuePElement = document.createElement('p');
	
		titleValueH3Element.appendChild(titleValue);
		contentValuePElement.appendChild(contentValue);
	
		let articleElement = document.createElement('article');
	
		articleElement.appendChild(titleValueH3Element);
		articleElement.appendChild(contentValuePElement);
	
		let articlesSection = document.getElementById('articles');
	
		articlesSection.appendChild(articleElement);

		document.getElementById('createTitle').value = '';
		document.getElementById('createContent').value = '';
	}
}