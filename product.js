// =======================================
// ShopEase Products Page
// =======================================

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =======================
// Add Product to Cart
// =======================

function addToCart(productName, productPrice) {

    const existingProduct = cart.find(
        item => item.name === productName
    );

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            name: productName,
            price: productPrice,
            quantity: 1

        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(productName + " added to cart!");

}

// =======================
// Search Products
// =======================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase();

        const products = document.querySelectorAll(".card");

        products.forEach(product => {

            const productName = product
                .querySelector("h3")
                .textContent
                .toLowerCase();

            if (productName.includes(searchValue)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}

// =======================
// Cart Count
// =======================

function updateCartCount() {

    const cartLink = document.querySelector(
        'a[href="cart.html"]'
    );

    if (!cartLink) return;

    let totalItems = 0;

    cart.forEach(item => {

        totalItems += item.quantity;

    });

    cartLink.innerHTML =
        `<i class="fa-solid fa-cart-shopping"></i> Cart (${totalItems})`;

}

updateCartCount();

// =======================
// Save Cart
// =======================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}
