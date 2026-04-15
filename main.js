let products = [
    { name: "Pooja Kit", price: 299, cat: "kit", img: "https://via.placeholder.com/200" },
    { name: "Karpuram", price: 50, cat: "powder", img: "https://via.placeholder.com/200" },
    { name: "Agarbatti", price: 120, cat: "powder", img: "https://via.placeholder.com/200" },
    { name: "Kumkum", price: 30, cat: "powder", img: "https://via.placeholder.com/200" },
    { name: "Turmeric", price: 40, cat: "powder", img: "https://via.placeholder.com/200" },
    { name: "Coconut Oil", price: 150, cat: "oil", img: "https://via.placeholder.com/200" },
    { name: "Deepam Oil", price: 100, cat: "oil", img: "https://via.placeholder.com/200" },
    { name: "Ayyappa Mala", price: 80, cat: "ayyappa", img: "https://via.placeholder.com/200" }
];

let cart = [];

/* DISPLAY PRODUCTS */
function displayProducts(list) {
    let html = "";

    list.forEach((p, i) => {
        html += `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${i})">Add</button>
        </div>`;
    });

    document.getElementById("productList").innerHTML = html;
}

/* ADD TO CART */
function addToCart(index) {
    cart.push(products[index]);
    updateTotal();
}

/* UPDATE TOTAL */
function updateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById("total").innerText = total;
}

/* CHECKOUT */
function checkout() {
    if (cart.length === 0) {
        alert("Cart empty");
        return;
    }

    let msg = "Order:%0A";

    cart.forEach(item => {
        msg += `${item.name} ₹${item.price}%0A`;
    });

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    msg += `Total: ₹${total}`;

    window.open(`https://wa.me/917386553109?text=${msg}`);
}

/* FILTER CATEGORY */
function filterCategory(cat) {
    if (cat === "all") {
        displayProducts(products);
    } else {
        let filtered = products.filter(p => p.cat === cat);
        displayProducts(filtered);
    }
}

/* SEARCH */
function searchProducts(value) {
    let filtered = products.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase())
    );
    displayProducts(filtered);
}

/* INITIAL LOAD */
displayProducts(products);