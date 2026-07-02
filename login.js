// ===============================
// ShopEase Login
// ===============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", loginUser);

function loginUser(e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {

        alert("Please fill all fields.");

        return;
    }

    // Demo Login
    // Later this will connect to the backend API.

    const user = {

        email: email

    };

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    alert("Login Successful!");

    window.location.href = "products.html";

}
