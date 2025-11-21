// Wait until page is ready or done loading
document.addEventListener('DOMContentLoaded', function() {
    
    // Find the login form
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the page refresh
            checkLogin();
        });
    }
});

function checkLogin() {
    let username = document.querySelector('input[name="username"]').value;
    let password = document.querySelector('input[name="usercode"]').value;
    
    // Get stored users
    let savedusers = JSON.parse(localStorage.getItem("users")) || [];
    
    // Check if user exists with matching password
    let validUser = savedusers.find(user => 
        user.username === username && user.password === password
    );
    
    if (validUser) {
        alert("Login successful!");
        window.location.href = "Homepage.html"; // Redirect manually
    } else {
        alert("Invalid username or password");
    }
}