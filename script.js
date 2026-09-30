function whatsapp(product) {

  const phone = "919530182253";

  const message =
    "Hello APNA BAZAAR! I am interested in " +
    product +
    ". Please share more details.";

  const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
function searchProducts() {

  const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const products =
    document.querySelectorAll(".product-card");

  products.forEach(function(product) {

    const name =
      product.getAttribute("data-name")
      .toLowerCase();

    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }

  });
}