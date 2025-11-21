// Load order summary when page loads
function loadOrderSummary() {
    let purchases = JSON.parse(localStorage.getItem('purchases')) || [];
    let output = "";
    let subtotal = 0;

    // Check if purchases are empty
    if (purchases.length === 0) {
        output = `<div class="order-item"><div class="item-name">Your cart is empty</div></div>`;
        document.getElementById('orderItems').innerHTML = output;
        updatePriceSummary(0);
        return;
    }

    // Process each purchase item
    purchases.forEach(function(purchase, index) {
        // Calculate price based on box tier
        let price = 0;
        if(purchase.box === "Basic Box") price = 50;
        else if(purchase.box === "Pro Box") price = 100;
        else if(purchase.box === "Epic Box") price = 250;
        

        // Create order item display
        output += `
            <div class="order-item">
                <div class="item-name">${purchase.box} - ${purchase.itemFound}</div>
                <div class="item-price">$${price}.00</div>
            </div>
        `;
    });

    // Update the order items display
    document.getElementById('orderItems').innerHTML = output;
    
    
}



// Place order function
function placeOrder() {
    let purchases = JSON.parse(localStorage.getItem('purchases')) || [];
    
    // Check if purchases are empty
    if (purchases.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
        return;
    }
    
    // Show success message
    alert("Order placed successfully! Thank you for your purchase.");
    
    // Clear purchases after successful order
    localStorage.removeItem('purchases');
    
    // Redirect to homepage
    window.location.href = "Index.html";
}

// Load order summary when page loads
window.onload = loadOrderSummary;