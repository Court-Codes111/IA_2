function displaycart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let output = "";

    cart.forEach(function(item,index){
        output += `
            <div class="cartbox">
                <img src="../Assets/${item.image}" width="100">
                <section>
                <h3>${item.tier}</h3>
                <p>${item.company}</p>

                <button onclick="removeFromCart(${index})">Remove</button>
                <button onclick="purchase('${item.tier}')">Purchase</button>
              </section>

            </div>
        `;
    });

    document.getElementById('cartItems').innerHTML = output;
}

displaycart();

function clearCart() {
    if (confirm("Clear entire cart?")) {
        localStorage.removeItem('cart');  // Clear saved data
        localStorage.removeItem('purchases');
        displaycart();  // Refresh display
        showPurchases();
    }
}

// MOVE THIS FUNCTION OUTSIDE OF clearCart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove 1 item at the specified position
    cart.splice(index, 1);
    
    // Save updated cart
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Refresh display
    displaycart();
}

function showPurchases() {
    let purchases = JSON.parse(localStorage.getItem('purchases')) || [];
    let output = "";
    
    let TotalCost = 0;
    let tax= 0;
    let ship= 0;
    let supTotal= 0;
    purchases.forEach(function(purchase, index) {
        supTotal += 1000;
        ship += 20;
        tax += 15;
        TotalCost= supTotal + ship + tax;
        output += `
            <div class="unbox-info">
                <img src="../Assets/B-icon1.png">
                <section>
                <h3>Purchase #${index + 1}</h3>
                <p><b>Box:</b> ${purchase.box}</p>
                <p><b>Item Found:</b> ${purchase.itemFound}</p>
                </section>
            </div>
        `;
    });
    
    document.getElementById('unboxItems').innerHTML = output;

     document.getElementById('subtotal').innerHTML = supTotal;
      document.getElementById('shipping').innerHTML = ship;
       document.getElementById('tax').innerHTML = tax;
    document.getElementById('totalItems').innerHTML = TotalCost;
}

showPurchases();

function purchase(TierName) {
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
        itemFound: randomItem,
    });
    
    localStorage.setItem('purchases', JSON.stringify(purchases));
    
    alert(`🎉 You found: ${randomItem} `);

    showPurchases();
}

 //Check out

  function proceedToCheckout() {
     //redirect to checkout
    window.location.href = "Checkout.html";
  }