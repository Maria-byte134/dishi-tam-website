<script>
let cart = [];

function addToCart(product) {
    cart.push(product);

    const count = document.getElementById("cart-count");
    if (count) count.innerText = cart.length;

    const list = document.getElementById("cart-items");
    if (!list) return;

    list.innerHTML = "";

    if (cart.length === 0) {
        list.innerHTML = "<li>Your cart is empty</li>";
        return;
    }

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function checkoutWhatsApp() {
    const phone = "254797411044";

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    const message = "Hello, I want to order:\n" + cart.join(", ");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
</script>
