const products = [
{ name: "CYL IR 1.75 _234_", image: "images/CYL IR 1.75 _234_.png" },
{ name: "CYL IR 1.75 (2340)", image: "images/CYL IR 1.75 (2340).png" },
{ name: "CYL IR 2.5 (242)", image: "images/CYL IR 2.5 (242).png" },
{ name: "CYL IR 2.5 (2475)", image: "images/CYL IR 2.5 (2475).png" },
{ name: "CYL IR 2.75 (2545)", image: "images/CYL IR 2.75 (2545).png" },
{ name: "images/CYL IR 3 (234)", image: "images/CYL IR 3 (234).png" },
  { name: "CYL IR 3 (253) F Line", image: "images/CYL IR 3 (253) F Line.png" },

  
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
