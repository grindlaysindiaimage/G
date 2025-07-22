const products = [
  { name: "Cylinder Block", image: "images/Cylinder Block.png" },
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

  { name: "PISTON IR 1.75(234) (C.I.)", image: "images/PISTON IR 1.75(234) (C.I.).png" },
  { name: "PISTON IR 1.75(2340) (C.I.)", image: "images/PISTON IR 1.75(2340) (C.I.).png" },
  { name: "PISTON IR 2.5 (242) (C.I.)", image: "images/PISTON IR 2.5 (242) (C.I.).png" },
  { name: "PISTON IR 2.5 NM (C.I.)", image: "images/PISTON IR 2.5 NM (C.I.).png" },
  { name: "PISTON 2.75 (2545) (C.I.)", image: "images/PISTON 2.75 (2545) (C.I.).png" },
  { name: "PISTON 2.75 (2600) (C.I.)", image: "images/PISTON 2.75 (2600) (C.I.).png" },
  { name: "PISTON IR 3 F-LINE 253 (C.I.)", image: "images/PISTON IR 3 F-LINE 253 (C.I.).png" },
  { name: "PISTON IR 3 NT(2340)", image: "images/PISTON IR 3 NT(2340).png" },
  { name: "Piston IR 3 OT(234) T-LINE (C.I.)", image: "images/Piston IR 3 OT(234) T-LINE (C.I.).png" },
  { name: "PISTON IR 3 OT(234)", image: "images/PISTON IR 3 OT(234).png" },
  { name: "PISTON IR 3.5 (C.I)", image: "images/PISTON IR 3.5 (C.I).png" },
  { name: "PISTON IR 4 25T (C.I)", image: "images/PISTON IR 4 25T (C.I).png" },
  { name: "PISTON IR 4 NT (2475)", image: "images/PISTON IR 4 NT (2475).png" },
  { name: "PISTON IR 4 OT", image: "images/PISTON IR 4 OT.png" },
  { name: "PISTON IR 5 NT (2545)", image: "images/PISTON IR 5 NT (2545).png" },
  { name: "PISTON IR 5 OT (25.4mm)", image: "images/PISTON IR 5 OT (25.4mm).png" },
  { name: "PISTON IR 5 OT (30mm)", image: "images/PISTON IR 5 OT (30mm).png" },
  { name: "PISTON IR 5.5", image: "images/PISTON IR 5.5.png" },

 { name: "Elgi Compressor Part", image: "images/Elgi Compressor Part.png" },
  { name: "G-EAC-001  (ARMETO SC50 )", image: "images/G-EAC-001.jpeg" },
{ name: "G-EAC-001A  (ARMETO TC500 )", image: "images/G-EAC-001A.jpeg" },
{ name: "G-EAC-001B  (ARMETO 2D )", image: "images/G-EAC-001B.jpeg" },
{ name: "G-EAC-008  (BEARING WASHER 3HP )", image: "images/G-EAC-008.jpeg" },
{ name: "G-EAC-009  (BEARING WASHER 5HP )", image: "images/G-EAC-009.jpeg" },
{ name: "G-EAC-010  (BREATHER VALVE )", image: "images/G-EAC-010.jpeg" },
{ name: "G-EAC-011  (BUSH 3HP. )", image: "images/G-EAC-011.jpeg" },
{ name: "G-EAC-012  (BUSH 5HP. )", image: "images/G-EAC-012.jpeg" },
{ name: "G-EAC-013  (CENTER PLATE 100MM )", image: "images/G-EAC-013.jpeg" },
{ name: "G-EAC-015  (CENTER PLATE 50MM )", image: "images/G-EAC-015.jpeg" },
{ name: "G-EAC-016  (CENTER PLATE 60MM )", image: "images/G-EAC-016.jpeg" },
{ name: "G-EAC-017  (CENTER PLATE 70MM )", image: "images/G-EAC-017.jpeg" },
{ name: "G-EAC-018  (COPPER WASHER 3HP. )", image: "images/G-EAC-018.jpeg" },
{ name: "G-EAC-019  (COPPER WASHER 5HP. )", image: "images/G-EAC-019.jpeg" },
{ name: "G-EAC-026  (END DISK 3HP. )", image: "images/G-EAC-026.jpeg" },
  { name: "G-EAC-027  (END DISK 5HP. )", image: "images/G-EAC-027.jpeg" },
{ name: "G-EAC-031  (INTER COOLER 2D )", image: "images/G-EAC-031.png" },
{ name: "G-EAC-032  (INTER COOLER SC-100 )", image: "images/G-EAC-032.jpeg" },
{ name: "G-EAC-033  (INTER COOLER SC-50 )", image: "images/G-EAC-033.jpeg" },
{ name: "G-EAC-034  (INTER COOLER TC-300 )", image: "images/G-EAC-034.jpeg" },
{ name: "G-EAC-035  (INTER COOLER TC-500 )", image: "images/G-EAC-035.jpeg" },
{ name: "G-EAC-036  (KEY 3HP. )", image: "images/G-EAC-036.jpeg" },
{ name: "G-EAC-037  (KEY 5HP. )", image: "images/G-EAC-037.jpeg" },
{ name: "G-EAC-038  (NRV 1.5 )", image: "images/G-EAC-038.jpeg" },
{ name: "G-EAC-039  (NRV 3/4 )", image: "images/G-EAC-039.jpeg" },
{ name: "G-EAC-040  (NUT NIPPLE 2D )", image: "images/G-EAC-040.jpeg" },
{ name: "G-EAC-041  (NUT NIPPLE 3HP. / TC-300 )", image: "images/G-EAC-041.jpeg" },
{ name: "G-EAC-042  (NUT NIPPLE 5HP. / TC-500 )", image: "images/G-EAC-042.jpeg" },
{ name: "G-EAC-045  (PAKING KIT 5HP. )", image: "images/G-EAC-045.jpeg" },
{ name: "G-EAC-051  (VALVE PATTI SS 100MM )", image: "images/G-EAC-051.jpeg" },
  { name: "G-EAC-052  (VALVE PATTI SS 50MM )", image: "images/G-EAC-052.jpeg" },
{ name: "G-EAC-053  (VALVE PATTI SS 60MM )", image: "images/G-EAC-053.jpeg" },
{ name: "G-EAC-054  (VALVE PATTI SS 70MM )", image: "images/G-EAC-054.jpeg" },
{ name: "G-EAC-062  (BREATHER PIPE BLACK 3HP. )", image: "images/G-EAC-062.jpeg" },
{ name: "G-EAC-064  (END DISK BOLT 3HP )", image: "images/G-EAC-064.jpeg" },
{ name: "G-EAC-064A  (END DISK BOLT 5HP. )", image: "images/G-EAC-064A.jpeg" },
{ name: "G-EAC-068A  (FILTER ELEMENT 3HP )", image: "images/G-EAC-068A.jpeg" },
{ name: "G-EAC-070  (OIL INDICATOR 2D )", image: "images/G-EAC-070.jpeg" },
{ name: "G-EAC-071  (OIL INDICATOR 3HP. )", image: "images/G-EAC-071.jpeg" },
{ name: "G-EAC-072  (OIL STOPPER 3HP. & 5HP. )", image: "images/G-EAC-072.jpeg" },
{ name: "G-EAC-075  (SAFETY VALVE 1/2 )", image: "images/G-EAC-075.jpeg" },
{ name: "G-EAC-076  (SAFETY VALVE 1/4 )", image: "images/G-EAC-076.jpeg" },
{ name: "G-EAC-077  (SAFETY VALVE 3/4 )", image: "images/G-EAC-077.jpeg" },
{ name: "G-EAC-078  (SAFETY VALVE 3/8 )", image: "images/G-EAC-078.jpeg" },





  
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
