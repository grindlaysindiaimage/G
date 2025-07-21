const products = [
  { name: "Cylinder Block", image: "images/Cylinder Block.png", category: "Cylinder Block" },
  { name: "CYL IR 1.75 (234)", image: "images/CYL IR 1.75 (234).png", category: "Cylinder Block" },
  { name: "CYL IR 1.75 (2340)", image: "images/CYL IR 1.75 (2340).png", category: "Cylinder Block" },
  { name: "CYL IR 2.5 (242)", image: "images/CYL IR 2.5 (242).png", category: "Cylinder Block" },
  { name: "CYL IR 2.5 (2475)", image: "images/CYL IR 2.5 (2475).png", category: "Cylinder Block" },
  { name: "CYL IR 2.75 (2545)", image: "images/CYL IR 2.75 (2545).png", category: "Cylinder Block" },
  { name: "CYL IR 3 (234)", image: "images/CYL IR 3 (234).png" , category: "Cylinder Block"},
  { name: "CYL IR 3 (253) F Line", image: "images/CYL IR 3 (253) F Line.png", category: "Cylinder Block" },
  { name: "CYL IR 3 T Line", image: "images/CYL IR 3 T Line.png", category: "Cylinder Block" },
  { name: "CYL IR 3.5", image: "images/CYL IR 3.5.png", category: "Cylinder Block" },
  { name: "CYL IR 4 (242)", image: "images/CYL IR 4 (242).png" , category: "Cylinder Block"},
  { name: "CYL IR 4 (2475)", image: "images/CYL IR 4 (2475).png" , category: "Cylinder Block"},
  { name: "CYL IR 5 (253) F Line", image: "images/CYL IR 5 (253) F Line.png", category: "Cylinder Block" },
  { name: "CYL IR 5 2545", image: "images/CYL IR 5 2545.png", category: "Cylinder Block" },
  { name: "CYL IR 5 T Line", image: "images/CYL IR 5 T Line.png", category: "Cylinder Block" },
  { name: "CYL IR 5.5", image: "images/CYL IR 5.5.png", category: "Cylinder Block" },

  { name: "Piston", image: "images/Piston.png" },
  { name: "PISTON IR 1.75(234) (C.I.)", image: "images/PISTON IR 1.75(234) (C.I.).png", category: "Piston"  },
  { name: "PISTON IR 1.75(2340) (C.I.)", image: "images/PISTON IR 1.75(2340) (C.I.).png", category: "Piston"  },
  { name: "PISTON IR 2.5 (242) (C.I.)", image: "images/PISTON IR 2.5 (242) (C.I.).png", category: "Piston"  },
  { name: "PISTON IR 2.5 NM (C.I.)", image: "images/PISTON IR 2.5 NM (C.I.).png", category: "Piston"  },
  { name: "PISTON 2.75 (2545) (C.I.)", image: "images/PISTON 2.75 (2545) (C.I.).png", category: "Piston"  },
  { name: "PISTON 2.75 (2600) (C.I.)", image: "images/PISTON 2.75 (2600) (C.I.).png", category: "Piston"  },
  { name: "PISTON IR 3 F-LINE 253 (C.I.)", image: "images/PISTON IR 3 F-LINE 253 (C.I.).png", category: "Piston"  },
  { name: "PISTON IR 3 NT(2340)", image: "images/PISTON IR 3 NT(2340).png", category: "Piston"  },
  { name: "Piston IR 3 OT(234) T-LINE (C.I.)", image: "images/Piston IR 3 OT(234) T-LINE (C.I.).png", category: "Piston"  },
  { name: "PISTON IR 3 OT(234)", image: "images/PISTON IR 3 OT(234).png", category: "Piston"  },
  { name: "PISTON IR 3.5 (C.I)", image: "images/PISTON IR 3.5 (C.I).png", category: "Piston"  },
  { name: "PISTON IR 4 25T (C.I)", image: "images/PISTON IR 4 25T (C.I).png", category: "Piston"  },
  { name: "PISTON IR 4 NT (2475)", image: "images/PISTON IR 4 NT (2475).png", category: "Piston"  },
  { name: "PISTON IR 4 OT", image: "images/PISTON IR 4 OT.png", category: "Piston"  },
  { name: "PISTON IR 5 NT (2545)", image: "images/PISTON IR 5 NT (2545).png", category: "Piston"  },
  { name: "PISTON IR 5 OT (25.4mm)", image: "images/PISTON IR 5 OT (25.4mm).png", category: "Piston"  },
  { name: "PISTON IR 5 OT (30mm)", image: "images/PISTON IR 5 OT (30mm).png", category: "Piston"  },
  { name: "PISTON IR 5.5", image: "images/PISTON IR 5.5.png", category: "Piston"  },




  
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
