// JavaScript for the cart functionality
const cartItems = []; // Array to store cart items
const cartTotal = document.getElementById("cart-total");
const cartList = document.getElementById("cart-items");

// Function to update the cart's total cost
function updateCartTotal() {
    let total = 0;
    for (let item of cartItems) {
        total += item.price;
    }
    cartTotal.innerText = total.toFixed(2);
}

// Function to add an item to the cart
function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
    updateCartTotal();
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
    updateCartTotal();
}

// Function to update the cart display
function updateCart() {
    cartList.innerHTML = "";
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(listItem);
    });
}
