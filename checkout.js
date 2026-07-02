// ======================================
// ShopEase Checkout
// ======================================

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const totalItems = document.getElementById("totalItems");
const subtotal = document.getElementById("subtotal");
const finalTotal = document.getElementById("finalTotal");
const checkoutForm = document.getElementById("checkoutForm");

// ===============================
// Display Order Summary
// ===============================

function displaySummary() {

    let items = 0;
    let total = 0;

    cart.forEach(item => {

        items += item.quantity;
        total += item.price * item.quantity;

    });

    totalItems.textContent = items;
    subtotal.textContent = "₹" + total;
    finalTotal.textContent = "₹" + total;

}

displaySummary();

// ===============================
// Place Order
// ===============================

checkoutForm.addEventListener("submit", placeOrder);

function placeOrder(e) {

    e.preventDefault();

    if (cart.length === 0) {

        alert("Your cart is empty!");
        return;

    }

    const order = {

        orderId: "SE" + Date.now(),

        items: cart,

        total: finalTotal.textContent,

        orderDate: new Date().toLocaleString()

    };

    // Save order history
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart
    localStorage.removeItem("cart");

    alert("🎉 Order Placed Successfully!");

    // Redirect
    window.location.href = "order.html";

}
