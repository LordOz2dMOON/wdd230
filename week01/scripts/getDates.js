const year = new Date().getFullYear();
const footer = document.querySelector("footer");
const firstParagraph = footer.querySelector("p");
firstParagraph.textContent = `© ${year} Oswald O. Ojo | Lagos`

const secondParagraph = document.getElementById("lastModified");
let lastModified = document.lastModified;
secondParagraph.textContent = `Last Modification: ${lastModified}`;