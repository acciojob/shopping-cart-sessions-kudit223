// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];



// DOM elements
const productList = document.getElementById("product-list");
const cartProductlist=document.querySelector('#cart-list');
const clearCartbtn=document.querySelector('#clear-cart-btn')
// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onClick=addToCart(${product.id}) data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
    let sessionStorageCart=JSON.parse(sessionStorage.getItem('inCart'));
    cartProductlist.innerHTML='';
    if(!sessionStorageCart) return;
    sessionStorageCart.forEach((item)=>{
        const li=document.createElement('li');
        li.innerHTML+=`${item.name} - $${item.price}`;
        cartProductlist.appendChild(li);
    })
}

// Add item to cart
function addToCart(productId) {
    let inCart=[];
    let userSelectedProduct=products[productId-1];
    let sessionStorageCart=JSON.parse(sessionStorage.getItem('inCart'));

    if(sessionStorageCart){
        sessionStorageCart.forEach(item=>{
        inCart.push(item);
    })}
    
    inCart.push(userSelectedProduct);
    sessionStorage.setItem('inCart',JSON.stringify(inCart))
    renderCart();
}

// Remove item from cart
function removeFromCart(productId) {}

// Clear cart
function clearCart() {
    sessionStorage.clear();
    renderCart();
}

clearCartbtn.addEventListener('click',clearCart)

// Initial render
renderProducts();
renderCart();
