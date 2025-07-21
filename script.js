
// Categorize each product
const categorizedProducts = products.map(product => {
  let category = "Other";
  const name = product.name.toLowerCase();

  if (name.includes("cyl")) category = "Cylinder";
  else if (name.includes("piston")) category = "Piston";
  else if (name.includes("g-eac") || name.includes("elgi")) category = "Elgi";

  return { ...product, category };
});

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

let lastRendered = [];

function areProductsEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((prod, i) => prod.name === b[i].name && prod.image === b[i].image);
}

function displayProducts(productList) {
  if (areProductsEqual(productList, lastRendered)) return;

  gallery.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
    `;
    gallery.appendChild(div);
  });

  lastRendered = productList;
}

function filterAndDisplay() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = categorizedProducts.filter(p => {
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchValue);
    return matchCategory && matchSearch;
  });

  displayProducts(filtered);
}

// Initial render
displayProducts(categorizedProducts);

// Event listeners
searchInput.addEventListener("input", filterAndDisplay);
categoryFilter.addEventListener("change", filterAndDisplay);
