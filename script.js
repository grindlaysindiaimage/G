const products = [
{ name: "Piston Ring", image: "images/CYL IR 1.75 _234_.png" },
  { name: "Valve Spring", image: "images/CYL IR 1.75 _234_.png" },
  { name: "Oil Seal", image: "images/CYL IR 1.75 _234_.png" }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

function displayProducts(productList) {
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
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
});

displayProducts(products);
