document.addEventListener("DOMContentLoaded", () => {
    fetch("/api/products")
        .then((response) => response.json())
        .then((products) => {
            const productList = document.getElementById("product-list");
            products.forEach((product) => {
                const card = document.createElement("div");
                card.className = "card bg-white p-4 rounded-lg shadow-md";
                card.innerHTML = `
          <h2 class="text-xl font-semibold">${product.name}</h2>
          <p class="text-gray-600">$${product.price}</p>
          <p class="text-gray-500">${product.description}</p>
        `;
                productList.appendChild(card);
            });
        })
        .catch((error) => console.error("Error fetching products:", error));
});
