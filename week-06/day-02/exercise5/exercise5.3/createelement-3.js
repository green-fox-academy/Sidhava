const kids = [
  { petName: "Wattled crane", owner: "Bryant" },
  { petName: "Devil, tasmanian", owner: "Alejandro" },
  { petName: "Mynah, common", owner: "Nelie" },
  { petName: "Dolphin, common", owner: "Mariele" },
  { petName: "Gray duiker", owner: "Maddalena" },
  { petName: "Crab (unidentified)", owner: "Lucine" },
  { petName: "Ant (unidentified)", owner: "Lorianna" },
  { petName: "Bison, american", owner: "Tommie" },
  { petName: "Yellow mongoose", owner: "Vivyan" },
  { petName: "Carpet snake", owner: "Veda" },
  { petName: "Lesser mouse lemur", owner: "Isidor" }
];

for (i = 0; i < kids.length; i++) {
  let articleElement = document.createElement("article");
  let h3Element = document.createElement("h3");
  let pElement = document.createElement("p");
  h3Element.textContent = kids[i].owner;
  pElement.textContent = kids[i].petName;
  articleElement.appendChild(h3Element);
  articleElement.appendChild(pElement);
  document.getElementById('pets').appendChild(articleElement);
}
