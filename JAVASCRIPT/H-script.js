// Cart functions
function addToCart(tier, company, image) {
    // Create an array to hold the items info
    // The JSON part saves the data if there was any data in the cart before, if not use the empty string
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Adds to the array
    cart.push({
        tier: tier,
        company: company,
        image: image
    });

    // Saves what was added to the array to the storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(tier + " ADDED TO CART❗");
}

function purchase(TierName, CompanyName, elementId) {
    // Random items that could be in the box
    const randomItems = [
        "Gold Watch", "Vintage Comic", "Artisan Coffee", 
        "Limited Sneakers", "Crystal Vase", "Designer Perfume",
        "Smart Speaker", "Gaming Headset", "Fitness Tracker",
        "Bluetooth Earbuds", "Phone Case", "Portable Charger"
    ];
    
    // Generate random item
    const randomItem = randomItems[Math.floor(Math.random() * randomItems.length)];
    
    // Save to purchases array
    let purchases = JSON.parse(localStorage.getItem('purchases')) || [];

    purchases.push({
        box: TierName,
        company: CompanyName,
        itemFound: randomItem,
    });
    
    localStorage.setItem('purchases', JSON.stringify(purchases));
    
    // Remove from cart after purchase
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.company !== CompanyName);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Hide the product from the products section
    const productElement = document.getElementById(elementId);
    if (productElement) {
        productElement.style.display = 'none';
    }
    
    alert(`🎉 You found: ${randomItem} from ${CompanyName}!`);
}



// Form handling for comments
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    
    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const comment = document.querySelector('input[name="comments"]').value;
            if (comment.trim() !== '') {
                alert('Thank you for your comment!');
                commentForm.reset();
            } else {
                alert('Please enter a comment before submitting.');
            }
        });
    }
});