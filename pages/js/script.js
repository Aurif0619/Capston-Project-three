
let cart = [];

let product = {
  image: '/imgs/graps.png',
  name: 'Organic Grape',
  price: 12.40
};


function addToCart(product) {
  cart.push(product);
  updateCartCount();
  updateCartUI();
}

function updateCartCount() {
  document.querySelector('.cartCount').innerHTML = `$${cart.length * product.price} / ${cart.length} items`;
}

function updateCartUI() {
  let cartHTML = '';

  cart.forEach((product, index) => {
    cartHTML += `
      <div >
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
        <p>$${product.price}</p>
        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });
  document.querySelector('.offcanvas-body').innerHTML = cartHTML;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  updateCartUI();
}


document.getElementById('sticky-btn').addEventListener('click', function () {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
