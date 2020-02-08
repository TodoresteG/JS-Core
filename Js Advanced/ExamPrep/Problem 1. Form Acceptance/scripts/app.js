function acceptance() {
	const addStock = (ev) => {

		const productQuantityValue = parseInt(productQuantityInput.value);
		const productScrapeValue = parseInt(productScrapeInput.value);

		if (productQuantityValue - productScrapeValue > 0) {
			if (shippingCompanyInput.value !== '' && productNameInput.value !== '' &&
				typeof productQuantityValue === 'number' && typeof productScrapeValue === 'number') {
				const divProduct = document.createElement('div');
				const p = document.createElement('p');
				const outOfStockButton = document.createElement('button');
				outOfStockButton.textContent = 'Out of stock';
				outOfStockButton.addEventListener('click', removeProduct);

				p.innerHTML = `[${shippingCompanyInput.value}] ${productNameInput.value} - ${productQuantityInput.value - productScrapeInput.value} pieces`;
				p.appendChild(outOfStockButton);
				divProduct.appendChild(p);
				divProduct.appendChild(outOfStockButton);
				divWarehouse.appendChild(divProduct);
			}

			shippingCompanyInput.value = '';
			productNameInput.value = '';
			productQuantityInput.value = '';
			productScrapeInput.value = '';
		}
	};

	const removeProduct = (ev) => {
		const p = ev.target.parentElement;
		divWarehouse.removeChild(p);
	};

	const shippingCompanyInput = document.getElementsByTagName('input')[0];
	const productNameInput = document.getElementsByTagName('input')[1];
	const productQuantityInput = document.getElementsByTagName('input')[2];
	const productScrapeInput = document.getElementsByTagName('input')[3];

	const divWarehouse = document.querySelector('#warehouse');

	const addButton = document.querySelector('button');
	addButton.addEventListener('click', addStock);
}