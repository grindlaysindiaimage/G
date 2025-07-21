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

  { name: "Piston", image: "images/Piston.png" },
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
{ name: "G-EAC-002  (ASSEMBLY 2D (60X60)", image: "images/Blank.png" },
{ name: "G-EAC-003  (ASSEMBLY SC-100 (100X100)", image: "images/Blank.png" },
{ name: "G-EAC-004  (ASSEMBLY SC-50 (70X70)", image: "images/Blank.png" },
{ name: "G-EAC-005  (ASSEMBLY TC-1000 (100X100X60)", image: "images/Blank.png" },
{ name: "G-EAC-005A  (ASSEMBLY TC-1000 (100X100X70)", image: "images/Blank.png" },
  { name: "G-EAC-006  (ASSEMBLY TC-300 (70X50)", image: "images/Blank.png" },
  { name: "G-EAC-007  (ASSEMBLY TC-500 (100X60)", image: "images/Blank.png" },
{ name: "G-EAC-008  (BEARING WASHER 3HP )", image: "images/G-EAC-008.jpeg" },
{ name: "G-EAC-009  (BEARING WASHER 5HP )", image: "images/G-EAC-009.jpeg" },
{ name: "G-EAC-010  (BREATHER VALVE )", image: "images/G-EAC-010.jpeg" },
{ name: "G-EAC-011  (BUSH 3HP. )", image: "images/G-EAC-011.jpeg" },
{ name: "G-EAC-012  (BUSH 5HP. )", image: "images/G-EAC-012.jpeg" },
{ name: "G-EAC-013  (CENTER PLATE 100MM )", image: "images/G-EAC-013.jpeg" },
    { name: "G-EAC-014  (CENTER PLATE 2D / 60S )", image: "images/Blank.png" },
{ name: "G-EAC-015  (CENTER PLATE 50MM )", image: "images/G-EAC-015.jpeg" },
{ name: "G-EAC-016  (CENTER PLATE 60MM )", image: "images/G-EAC-016.jpeg" },
{ name: "G-EAC-017  (CENTER PLATE 70MM )", image: "images/G-EAC-017.jpeg" },
{ name: "G-EAC-018  (COPPER WASHER 3HP. )", image: "images/G-EAC-018.jpeg" },
{ name: "G-EAC-019  (COPPER WASHER 5HP. )", image: "images/G-EAC-019.jpeg" },
    { name: "G-EAC-020  (CRANK CASE 1.5HP. )", image: "images/Blank.png" },
    { name: "G-EAC-021  (CRANK CASE 10HP. )", image: "images/Blank.png" },
    { name: "G-EAC-022  (CRANK CASE 15HP. )", image: "images/Blank.png" },
    { name: "G-EAC-023  (CRANK CASE 2HP. )", image: "images/Blank.png" },
    { name: "G-EAC-024  (CRANK CASE 3HP. )", image: "images/Blank.png" },
    { name: "G-EAC-025  (CRANK CASE 5HP. )", image: "images/Blank.png" },
{ name: "G-EAC-026  (END DISK 3HP. )", image: "images/G-EAC-026.jpeg" },
  { name: "G-EAC-027  (END DISK 5HP. )", image: "images/G-EAC-027.jpeg" },
    { name: "G-EAC-028  (FAN 2HP. )", image: "images/Blank.png" },
    { name: "G-EAC-029  (FAN 3HP. )", image: "images/Blank.png" },
    { name: "G-EAC-030  (FAN 5HP. & 10HP.)", image: "images/Blank.png" },
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
    { name: "G-EAC-043  (PAKING KIT 10HP. )", image: "images/Blank.png" },
    { name: "G-EAC-044  (PAKING KIT 3HP. )", image: "images/Blank.png" },
{ name: "G-EAC-045  (PAKING KIT 5HP. )", image: "images/G-EAC-045.jpeg" },
    { name: "G-EAC-046  (PULLY 10HP. )", image: "images/Blank.png" },
    { name: "G-EAC-047  (PULLY 15HP. )", image: "images/Blank.png" },
    { name: "G-EAC-048  (PULLY 2HP. )", image: "images/Blank.png" },
    { name: "G-EAC-049  (PULLY 3HP. )", image: "images/Blank.png" },
    { name: "G-EAC-050  (PULLY 5HP. )", image: "images/Blank.png" },
{ name: "G-EAC-051  (VALVE PATTI SS 100MM )", image: "images/G-EAC-051.jpeg" },
  { name: "G-EAC-052  (VALVE PATTI SS 50MM )", image: "images/G-EAC-052.jpeg" },
{ name: "G-EAC-053  (VALVE PATTI SS 60MM )", image: "images/G-EAC-053.jpeg" },
{ name: "G-EAC-054  (VALVE PATTI SS 70MM )", image: "images/G-EAC-054.jpeg" },
    { name: "G-EAC-055  (AFTER COOLER PIPE SET SC-100 )", image: "images/Blank.png" },
    { name: "G-EAC-056  (AFTER COOLER PIPE SET SC-50 )", image: "images/Blank.png" },
    { name: "G-EAC-057  (AFTER COOLER PIPE SET TC-300 )", image: "images/Blank.png" },
    { name: "G-EAC-058  (AFTER COOLER PIPE SET TC-500 )", image: "images/Blank.png" },
    { name: "G-EAC-059  (ALFA PRESSURE CONTROL SWITCH PR 15 )", image: "images/Blank.png" },
    { name: "G-EAC-060  (ALFA PRESSURE CONTROL SWITCH PR 15X )", image: "images/Blank.png" },
    { name: "G-EAC-061  (ALFA PRESSURE CONTROL SWITCH PRV 15X )", image: "images/Blank.png" },
 { name: "G-EAC-061A  (ALFA PRESSURE CONTROL SWITCH PRV 15 )", image: "images/G-EAC-061A.jpeg" }, 
{ name: "G-EAC-062  (BREATHER PIPE BLACK 3HP. )", image: "images/G-EAC-062.jpeg" },
    { name: "G-EAC-063  (DEMPING PIPE SET 10HP. )", image: "images/Blank.png" },
{ name: "G-EAC-064  (END DISK BOLT 3HP )", image: "images/G-EAC-064.jpeg" },
{ name: "G-EAC-064A  (END DISK BOLT 5HP. )", image: "images/G-EAC-064A.jpeg" },
    { name: "G-EAC-065  (FILTER ASSEMBLY 3HP. )", image: "images/Blank.png" },
 { name: "G-EAC-066  (FILTER ASSEMBLY 5HP. )", image: "images/G-EAC-066.jpeg" },
  { name: "G-EAC-067  (FILTER BODY 5HP. )", image: "images/G-EAC-067.jpeg" },
    { name: "G-EAC-068  (FILTER ELEMENT 5HP & 7.5 HP. )", image: "images/Blank.png" },
{ name: "G-EAC-068A  (FILTER ELEMENT 3HP )", image: "images/G-EAC-068A.jpeg" },
    { name: "G-EAC-069  (L PIPE SET 10HP. )", image: "images/Blank.png" },
{ name: "G-EAC-070  (OIL INDICATOR 2D )", image: "images/G-EAC-070.jpeg" },
{ name: "G-EAC-071  (OIL INDICATOR 3HP. )", image: "images/G-EAC-071.jpeg" },
{ name: "G-EAC-072  (OIL STOPPER 3HP. & 5HP. )", image: "images/G-EAC-072.jpeg" },
    { name: "G-EAC-073  (S & U PIPE SET 10HP. )", image: "images/Blank.png" },
    { name: "G-EAC-074  (S.Q CONNECTOR 1 )", image: "images/Blank.png" },
{ name: "G-EAC-075  (SAFETY VALVE 1/2 )", image: "images/G-EAC-075.jpeg" },
{ name: "G-EAC-076  (SAFETY VALVE 1/4 )", image: "images/G-EAC-076.jpeg" },
{ name: "G-EAC-077  (SAFETY VALVE 3/4 )", image: "images/G-EAC-077.jpeg" },
{ name: "G-EAC-078  (SAFETY VALVE 3/8 )", image: "images/G-EAC-078.jpeg" },

  
  { name: "Demo", image: "images/CYL IR 1.75 (234).png" },
  { name: "Demo", image: "images/CYL IR 1.75 (234).png" }
];

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
