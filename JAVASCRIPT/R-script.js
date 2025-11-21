document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission
            
            if (valid()) {
                storedata();
                window.location.href = "Login.html"; // Redirect after successful registration
            }
        });
    }
});

function valid() {
    let access = document.querySelector('input[name="usercode"]').value;
    // stores the password input

    let CL = /[A-Z]/.test(access);
    //test if the password has and Uppercase letters

    let num = (access.match(/[0-9]/g) || []).length;
    //Give how much numbers is found in the password

    if (num >= 3 && CL) {
        return true; // Allow submit
    } else {
        alert("Access denied: At least one Capital Letter and 3 numbers");
        return false; // Block submit
    }
}

let info = JSON.parse(localStorage.getItem("users")) || [];
//the same as info=[]; but only if the array is empty, if not the JSON... loads the existing users info

function storedata() {
    let username = document.querySelector('input[name="username"]').value;
    let contact = document.querySelector('input[name="contact"]').value;
    let DOB = document.querySelector('input[name="dob"]').value;
    let email = document.querySelector('input[name="mail"]').value;
    let street = document.querySelector('input[name="street"]').value;
    let city = document.querySelector('input[name="city"]').value;
    let parish = document.querySelector('input[name="parish"]').value;
    let zip = document.querySelector('input[name="ZIP"]').value;
    let country = document.querySelector('input[name="country"]').value;
    let locate = document.querySelector('input[name="locate"]').value;
    let ID = document.querySelector('input[name="ID"]').value;
    let usercode = document.querySelector('input[name="usercode"]').value;

    info.push({
        username,
        contact, 
        DOB, 
        email, 
        address: {street, city, parish, zip, country}, 
        locate, 
        ID, 
        password: usercode
    });

    localStorage.setItem("users", JSON.stringify(info));
    alert("Registration successful!");
}