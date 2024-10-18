let cart = [];

let productGrape = {
  image: '/imgs/graps.png',
  name: 'Organic Grape',
  price: 12.40,
  quantity: 1
};
let productCorn = {
  image: '/imgs/corn.png',
  name: 'Organic Corn',
  price: 32.20,
  quantity: 1
};

let productCherry = {
  image: '/imgs/cherry.png',
  name: 'Organic Cherry',
  price: 15.45,
  quantity: 1
};

let productLemon = {
  image: '/imgs/lemon.png',
  name: 'Organic Lemon',
  price: 19.45,
  quantity: 1
};

function addToCart(product) {
  let  existProductIndex = cart.findIndex(item => item.name === product.name);
  
  if (existProductIndex !== -1) {

    alert('You have already added this item to the cart')

  } else {
    cart.push({ ...product });
    updateCartCount();
    updateCartUI();
  }
  }

function updateCartCount() {
  document.querySelector('.cartCount').innerHTML = `$${calculateTotalPrice()} / ${cart.length} items`;
}

function calculateTotalPrice() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

function updateCartUI() {
  let cartHTML = '';

  cart.forEach((product, index) => {
    cartHTML += `
      <div class="d-flex align-items-center border p-2 mb-3">
        <div class="me-3">
          <img class="img-fluid" style="max-width: 80px;" src="${product.image}" alt="${product.name}">
        </div>
        <div class="flex-grow-1">
          <h5 class="mb-1">${product.name}</h5>
          <p class="mb-0">Price: $${product.price} x ${product.quantity}</p>
          <p class="mb-0 fw-bold">Total: $${(product.price * product.quantity).toFixed(2)}</p>
        </div>
        <div class="ms-3 d-flex flex-column">
          <button class="btn btn-sm btn-info mb-2" onclick="increaseQuantity(${index})">
            <i class="bi bi-plus-circle"></i> Increase Quantity
          </button>
          <button class="btn btn-sm btn-warning mb-2" onclick="decreaseQuantity(${index})">
            <i class="bi bi-dash-circle"></i> Decrease Quantity
          </button>
          <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
            <i class="bi bi-trash"></i> Remove
          </button>
        </div>
      </div>
    `;
  });

  document.querySelector('.offcanvas-body').innerHTML = cartHTML;
}
function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateCartCount();
  updateCartUI();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1; 
  } else {
    removeFromCart(index); 
  }
  updateCartCount();
  updateCartUI();
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
