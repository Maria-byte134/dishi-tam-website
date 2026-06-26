<script>
let cart = [];

function addToCart(product) {
    cart.push(product);

    document.getElementById("cart-count").innerText = cart.length;

    let list = document.getElementById("cart-items");

    if (cart.length === 1) {
        list.innerHTML = "";
    }

    let item = document.createElement("li");
    item.innerText = product;
    list.appendChild(item);
}

function checkoutWhatsApp() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello, I would like to order:\n\n";

    cart.forEach(function(item) {
        message += "• " + item + "\n";
    });
    <script>
let cart = [];

function addToCart(product) {
    cart.push(product);

    document.getElementById("cart-count").innerText = cart.length;

    updateCartUI();
}

function updateCartUI() {
    let cartList = document.getElementById("cart-items");

    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
        return;
    }

    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function checkoutWhatsApp() {
    let phone = "254797411044";
    let message = "Hello, I want to order:\n" + cart.join(", ");

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
</script>

    window.open(
        "https://wa.me/254797411044?text=" + encodeURIComponent(message),
        "_blank"
    );
}
</script>
