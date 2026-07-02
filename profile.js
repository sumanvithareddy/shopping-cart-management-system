// =====================================
// ShopEase Profile
// =====================================

// Load user data
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
const users = JSON.parse(localStorage.getItem("users")) || [];

const nameElement = document.getElementById("userName");
const emailElement = document.getElementById("userEmail");

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");

const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");
const orderCount = document.getElementById("orderCount");

// ===============================
// Load Profile
// ===============================

function loadProfile() {

    if (!loggedInUser) {

        alert("Please login first.");

        window.location.href = "login.html";

        return;
    }

    const currentUser = users.find(
        user => user.email === loggedInUser.email
    );

    if (currentUser) {

        nameElement.textContent = currentUser.name;
        emailElement.textContent = currentUser.email;

        profileName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
        profilePhone.textContent = currentUser.phone || "Not Available";

    }

    updateDashboard();

}

loadProfile();

// ===============================
// Dashboard Counts
// ===============================

function updateDashboard() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    cartCount.textContent = cart.length;
    wishlistCount.textContent = wishlist.length;
    orderCount.textContent = orders.length;

}

// ===============================
// Edit Profile
// ===============================

const editBtn = document.getElementById("editBtn");

editBtn.addEventListener("click", () => {

    const newName = prompt("Enter your new name:");

    if (!newName) return;

    const index = users.findIndex(
        user => user.email === loggedInUser.email
    );

    if (index !== -1) {

        users[index].name = newName;

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        loadProfile();

        alert("Profile Updated Successfully!");

    }

});

// ===============================
// Logout
// ===============================

function logout() {

    if (confirm("Are you sure you want to logout?")) {

        localStorage.removeItem("loggedInUser");

        alert("Logged out successfully!");

        window.location.href = "login.html";

    }

}
