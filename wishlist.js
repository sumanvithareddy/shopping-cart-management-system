// =====================================
// ShopEase Wishlist
// =====================================

// Get wishlist from localStorage
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistContainer = document.getElementById("wishlistContainer");
const emptyWishlist = document.getElementById("emptyWishlist");

// ===============================
// Add Product To Wishlist
// ===============================

function addToWishlist(name, price, image = "images/product1.jpg") {

    const exists = wishlist.find(item => item.name === name);

    if (exists) {

        alert("❤️ Product already exists in your wishlist.");
        return;

    }

    wishlist.push({

        name,
        price,
        image

    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("❤️ Added to Wishlist!");

}

// ===============================
// Display Wishlist
// ===============================

function displayWishlist() {

    if (!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    if (wishlist.length === 0) {

        emptyWishlist.style.display = "block";
        return;

    }

    emptyWishlist.style.display = "none";

    wishlist.forEach((item, index) => {

        wishlistContainer.innerHTML += `

        <div class="card">

            <img src="${item.image}" alt="${item.name}">

            <h3>${item.name}</h3>

            <p>₹${item.price}</p>

            <button onclick="moveToCart(${index})">

                <i class="fa-solid fa-cart-shopping"></i>

                Move to Cart

            </button>

            <button
                style="margin-top:10px;background:#dc2626;color:white;"
                onclick="removeWishlist(${index})">

                Remove

            </button>

        </div>

        `;

    });

}

// ===============================
// Remove Product
// ===============================

function removeWishlist(index) {

    wishlist.splice(index, 1);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    displayWishlist();

}

// ===============================
// Move To Cart
// ===============================

function moveToCart(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({

        name: wishlist[index].name,

        price: wishlist[index].price,

        quantity: 1

    });

    localStorage.setItem("cart", JSON.stringify(cart));

    removeWishlist(index);

    alert("🛒 Product moved to Cart.");

}

// ===============================
// Load Wishlist
// ===============================

displayWishlist();
