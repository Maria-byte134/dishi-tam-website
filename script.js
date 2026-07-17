<script>
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
    const list = document.getElementById("cart-items");
    const count = document.getElementById("cart-count");

    if (count) count.innerText = cart.length;

    if (!list) return;

    list.innerHTML = "";

    if (cart.length === 0) {
        list.innerHTML = "<li>Your cart is empty</li>";
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${item}
            <button onclick="removeFromCart(${index})" style="margin-left:10px;color:red;">
                Remove
            </button>
        `;

        list.appendChild(li);
    });
}

function addToCart(product) {
    cart.push(product);
    saveCart();
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function checkoutWhatsApp() {
    const phone = "254797411044";

    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    const location = document.getElementById("location").value;

    if (location === "") {
        alert("Please select your delivery location");
        return;
    }

    const message =
        "Hello, I want to order:\n" +
        cart.join(", ") +
        "\n\nDelivery Location: " + location;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}

// Load cart on page start
updateCartUI();
</script>
