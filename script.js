const products = [
  { name: "CYL IR 1.75 (234)", image: "images/CYL IR 1.75 (234).png", category: "Cylinder" },
  { name: "CYL IR 1.75 (2340)", image: "images/CYL IR 1.75 (2340).png", category: "Cylinder" },
  { name: "CYL IR 2.5 (242)", image: "images/CYL IR 2.5 (242).png", category: "Cylinder" },
  { name: "CYL IR 2.5 (2475)", image: "images/CYL IR 2.5 (2475).png", category: "Cylinder" },
  { name: "CYL IR 2.75 (2545)", image: "images/CYL IR 2.75 (2545).png", category: "Cylinder" },
  { name: "CYL IR 3 (234)", image: "images/CYL IR 3 (234).png", category: "Cylinder" },
  { name: "CYL IR 3 (253) F Line", image: "images/CYL IR 3 (253) F Line.png", category: "Cylinder" },
  { name: "CYL IR 3 T Line", image: "images/CYL IR 3 T Line.png", category: "Cylinder" },
  { name: "CYL IR 3.5", image: "images/CYL IR 3.5.png", category: "Cylinder" },
  { name: "CYL IR 4 (242)", image: "images/CYL IR 4 (242).png", category: "Cylinder" },
  { name: "CYL IR 4 (2475)", image: "images/CYL IR 4 (2475).png", category: "Cylinder" },
  { name: "CYL IR 5 (253) F Line", image: "images/CYL IR 5 (253) F Line.png", category: "Cylinder" },
  { name: "CYL IR 5 2545", image: "images/CYL IR 5 2545.png", category: "Cylinder" },
  { name: "CYL IR 5 T Line", image: "images/CYL IR 5 T Line.png", category: "Cylinder" },
  { name: "CYL IR 5.5", image: "images/CYL IR 5.5.png", category: "Cylinder" },

  { name: "PISTON IR 1.75(234) (C.I.)", image: "images/PISTON IR 1.75(234) (C.I.).png", category: "Piston" },
  { name: "PISTON IR 1.75(2340) (C.I.", image: "images/PISTON IR 1.75(2340) (C.I.).png", category: "Piston" },
  { name: "PISTON IR 2.5 (242) (C.I.)", image: "images/PISTON IR 2.5 (242) (C.I.).png", category: "Piston" },
  { name: "PISTON IR 2.5 NM (C.I.)", image: "images/PISTON IR 2.5 NM (C.I.).png", category: "Piston" },
  { name: "PISTON 2.75 (2545) (C.I.)", image: "images/PISTON 2.75 (2545) (C.I.).png", category: "Piston" },
  { name: "PISTON 2.75 (2600) (C.I.)", image: "images/PISTON 2.75 (2600) (C.I.).png", category: "Piston" },
  { name: "PISTON IR 3 F-LINE 253 (C.I.)", image: "images/PISTON IR 3 F-LINE 253 (C.I.).png", category: "Piston" },
  { name: "PISTON IR 3 NT(2340)", image: "images/PISTON IR 3 NT(2340).png", category: "Piston" },
  { name: "Piston IR 3 OT(234) T-LINE (C.I.)", image: "images/Piston IR 3 OT(234) T-LINE (C.I.).png", category: "Piston" },
  { name: "PISTON IR 3 OT(234)", image: "images/PISTON IR 3 OT(234).png", category: "Piston" },
  { name: "PISTON IR 3.5 (C.I)", image: "images/PISTON IR 3.5 (C.I).png", category: "Piston" },
  { name: "PISTON IR 4 25T (C.I)", image: "images/PISTON IR 4 25T (C.I).png", category: "Piston" },
  { name: "PISTON IR 4 NT (2475)", image: "images/PISTON IR 4 NT (2475).png", category: "Piston" },
  { name: "PISTON IR 4 OT", image: "images/PISTON IR 4 OT.png", category: "Piston" },
  { name: "PISTON IR 5 NT (2545)", image: "images/PISTON IR 5 NT (2545).png", category: "Piston" },
  { name: "PISTON IR 5 OT (25.4mm)", image: "images/PISTON IR 5 OT (25.4mm).png", category: "Piston" },
  { name: "PISTON IR 5 OT (30mm)", image: "images/PISTON IR 5 OT (30mm).png", category: "Piston" },
  { name: "PISTON IR 5.5", image: "images/PISTON IR 5.5.png", category: "Piston" },

  { name: "Demo", image: "images/CYL IR 1.75 (234).png", category: "Demo" },
  { name: "Demo", image: "images/CYL IR 1.75 (234).png", category: "Demo" }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

function displayProducts(productList) {
  gallery.innerHTML = "";

  const categories = {};
  productList.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });

  for (const category in categories) {
    const heading = document.createElement("h2");
    heading.className = "section-heading";
    heading.textContent = category;
    gallery.appendChild(heading);

    const groupContainer = document.createElement("div");
    groupContainer.className = "gallery-group";

    categories[category].forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
      `;
      groupContainer.appendChild(div);
    });

    gallery.appendChild(groupContainer);
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
});

displayProducts(products);
