const products = [
  { name: "Cylinder Block", category: "Cylinder Block", image: "images/Cylinder Block.png" },
  { name: "CYL IR 1.75 (234)", category: "Cylinder Block", image: "images/CYL IR 1.75 (234).png" },
  { name: "Piston Ring Set A", category: "Piston Ring", image: "images/Piston Ring Set A.png" },
  { name: "Liner Model X", category: "Liner", image: "images/Liner Model X.png" },
  { name: "ELGI Compressor Valve", category: "Elgi Compressor Item", image: "images/ELGI Compressor Valve.png" }
];

// DOM elements
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

// Render products
function renderProducts(filteredProducts) {
  gallery.innerHTML = "";

  if (filteredProducts.length === 0) {
    gallery.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.onerror = () => img.src = "images/placeholder.png";

    const name = document.createElement("p");
    name.textContent = product.name;

    card.appendChild(img);
    card.appendChild(name);
    gallery.appendChild(card);
  });
}

// Filter function
function filterProducts() {
  const term = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  const filtered = products.filter(product => {
    const matchCategory = category === "All" || product.category === category;
    const matchSearch = product.name.toLowerCase().includes(term);
    return matchCategory && matchSearch;
  });

  renderProducts(filtered);
}

// Events
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

// Initial render
renderProducts(products);
