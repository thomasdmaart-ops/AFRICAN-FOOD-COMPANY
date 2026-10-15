// Authentication & Route Protection Logic

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');

    // Demo credentials check (Change password or integrate with backend API as needed)
    if (email && password === "Staff@2026") { 
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("userRole", "employee");
        window.location.href = "sops.html";
    } else {
        errorDiv.textContent = "Invalid credentials. Please try again.";
        errorDiv.style.display = "block";
    }
}

function checkAuth() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn !== "true") {
        alert("Unauthorized access! Please login with your employee credentials to view IT SOPs.");
        window.location.href = "login.html";
    }
}

function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userRole");
    window.location.href = "login.html";
}