<script>
let cart = [];

function addToCart(product) {
    cart.push(product);

    document.getElementById("cart-count").innerText = cart.length;

    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cart-items");

    if (!cartList) {
        console.error("cart-items element not found");
        return;
    }

    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
        return;
    }

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function checkoutWhatsApp() {
    const phone = "254797411044";

    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    const message = "Hello, I want to order:\n" + cart.join(", ");

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
</script>
