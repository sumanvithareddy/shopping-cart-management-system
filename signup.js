// ===============================
// ShopEase Signup
// ===============================

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", registerUser);

function registerUser(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validation

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill all the fields.");
        return;

    }

    if (password !== confirmPassword) {

        alert("Passwords do not match.");
        return;

    }

    // Get existing users

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate email

    const userExists = users.find(user => user.email === email);

    if (userExists) {

        alert("Email already registered.");
        return;

    }

    // Create new user

    const newUser = {

        name,
        email,
        phone,
        password

    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account Created Successfully!");

    window.location.href = "login.html";

}
