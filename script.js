const products = [
  { name: "Cylinder Block", category: "Cylinder Block", image: "images/Cylinder Block.png" },
  { name: "CYL IR 1.75 (234)", category: "Cylinder Block", image: "images/CYL IR 1.75 (234).png" },
  { name: "Piston Ring Set A", category: "Piston Ring", image: "images/Piston Ring Set A.png" },
  { name: "Liner Model X", category: "Liner", image: "images/Liner Model X.png" },
  { name: "ELGI Compressor Valve", category: "Elgi Compressor Item", image: "images/ELGI Compressor Valve.png" },
  // Add more products here...
];

// Get elements
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

// Render function
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
    img.onerror = function () {
      this.src = "images/placeholder.png"; // Fallback if image not found
    };

    const name = document.createElement("p");
    name.textContent = product.name;

    card.appendChild(img);
    card.appendChild(name);
    gallery.appendChild(card);
  });
}

// Filter function
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

// Initial render
renderProducts(products);
