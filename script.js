const products = [
{ name: "CYL IR 1.75 (234)", image: "images/CYL IR 1.75 (234).png" },
{ name: "CYL IR 1.75 (2340)", image: "images/CYL IR 1.75 (2340).png" },
{ name: "CYL IR 2.5 (242)", image: "images/CYL IR 2.5 (242).png" },
{ name: "CYL IR 2.5 (2475)", image: "images/CYL IR 2.5 (2475).png" },
{ name: "CYL IR 2.75 (2545)", image: "images/CYL IR 2.75 (2545).png" },
{ name: "CYL IR 3 (234)", image: "images/CYL IR 3 (234).png" },
  { name: "CYL IR 3 (253) F Line", image: "images/CYL IR 3 (253) F Line.png" },
  { name: "CYL IR 3 T Line", image: "images/CYL IR 3 T Line.png" },
{ name: "CYL IR 3.5", image: "images/CYL IR 3.5.png" },
{ name: "CYL IR 4 (242)", image: "images/CYL IR 4 (242).png" },
{ name: "CYL IR 4 (2475)", image: "images/CYL IR 4 (2475).png" },
{ name: "CYL IR 5 (253) F Line", image: "images/CYL IR 5 (253) F Line.png" },
{ name: "CYL IR 5 2545", image: "images/CYL IR 5 2545.png" },
  { name: "CYL IR 5 T Line", image: "images/CYL IR 5 T Line.png" },
{ name: "CYL IR 5.5", image: "images/CYL IR 5.5.png" },
  
  { name: "Demo", image: "images/CYL IR 1.75 (234).png" },
  { name: "Demo", image: "images/CYL IR 1.75 (234).png" }
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
