function solve() {
   let productsList = [];
   let textArea = document.getElementsByTagName('textarea')[0];

   let addButtons = document.querySelectorAll('.add-product');
   
   for (let i = 0; i < addButtons.length; i++) {
      let button = addButtons[i];

      button.addEventListener('click', addEvent);
   }

   let checkOutButton = document.querySelector('.checkout');

   checkOutButton.addEventListener('click', checkOutEvent);

   function removeEvents() {
      for (let i = 0; i < addButtons.length; i++) {
         let button = addButtons[i];
   
         button.removeEventListener('click', addEvent);
      }

      checkOutButton.removeEventListener('click', checkOutEvent);
   }

   function checkOutEvent() {
      let totalPrice = 0;
      let productNames = [];

      for (let i = 0; i < productsList.length; i++) {
         let currentProduct = productsList[i];

         totalPrice += currentProduct.Price;

         if (productNames.includes(currentProduct.Name) === false) {
            productNames.push(currentProduct.Name);
         }
      }

      let message = document.createTextNode(`You bought ${productNames.join(', ')} for ${totalPrice.toFixed(2)}.`);

      textArea.appendChild(message);

      removeEvents();
   }

   function addEvent(e) {
      let addButton = e.target;
      let addProduct = addButton.parentNode;
      let product = addProduct.parentNode;

      let productNameElement = product.getElementsByClassName('product-title')[0];
      let productPriceElement = product.getElementsByClassName('product-line-price')[0];

      let productName = productNameElement.textContent;
      let productPrice = Number(productPriceElement.textContent);

      let productObj = {Name: productName, Price: productPrice}

      productsList.push(productObj);

      let message = document.createTextNode(`Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`);

      textArea.appendChild(message);
   }
}