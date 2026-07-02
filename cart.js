// =====================================
// ShopEase Cart
// =====================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const grandTotal = document.getElementById("grandTotal");
const emptyCart = document.getElementById("emptyCart");

// Load Cart
displayCart();

function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        document.querySelector(".cart-section").style.display = "none";
        emptyCart.style.display = "block";
        return;

    }

    document.querySelector(".cart-section").style.display = "block";
    emptyCart.style.display = "none";

    let total = 0;

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        total += itemTotal;

        cartItems.innerHTML += `
            <tr>

                <td>${item.name}</td>

                <td>₹${item.price}</td>

                <td>

                    <div class="quantity">

                        <button onclick="decreaseQuantity(${index})">-</button>

                        <span>${item.quantity}</span>

                        <button onclick="increaseQuantity(${index})">+</button>

                    </div>

                </td>

                <td>₹${itemTotal}</td>

                <td>

                    <button
                        class="remove-btn"
                        onclick="removeItem(${index})">

                        Remove

                    </button>

                </td>

            </tr>
        `;

    });

    grandTotal.textContent = total;

}

// Increase Quantity

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

}

// Decrease Quantity

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

}

// Remove Product

function removeItem(index) {

    if (confirm("Remove this item from cart?")) {

        cart.splice(index, 1);

        saveCart();

    }

}

// Save Cart

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}
