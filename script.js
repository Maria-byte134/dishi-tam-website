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

    window.open(
        "https://wa.me/254797411044?text=" + encodeURIComponent(message),
        "_blank"
    );
}
</script>