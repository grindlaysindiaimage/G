const products = [
  { name: "CYL IR 1.75 (234)", image: "images/CYL IR 1.75 (234).png", category: "Cylinder Block" },
  { name: "CYL IR 2.5 (242)", image: "images/CYL IR 2.5 (242).png", category: "Cylinder Block" },
  { name: "PISTON A001", image: "images/PISTON A234.png", category: "Piston" },
  { name: "PISTON RING STD", image: "images/PISTON RING STD.png", category: "Piston Ring" },
  { name: "LINER 78mm", image: "images/LINER 78mm.png", category: "Liner" },
  { name: "ELGI HEAD", image: "images/ELGI HEAD.png", category: "Elgi Compressor Item" }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");

function renderProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = products.filter(product => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm);
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  gallery.innerHTML = "";

  if (filtered.length === 0) {
    gallery.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.onerror = () => {
      img.src = "images/placeholder.png"; // fallback image if image not found
      img.alt = "Image not available";
    };

    const name = document.createElement("p");
    name.textContent = product.name;

    productDiv.appendChild(img);
    productDiv.appendChild(name);
    gallery.appendChild(productDiv);
  });
}

searchInput.addEventListener("input", renderProducts);
categorySelect.addEventListener("change", renderProducts);

// Initial render
renderProducts();
