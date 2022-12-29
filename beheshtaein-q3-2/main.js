let container = document.querySelector("#container");
let greenBar = document.querySelector("#green-bar");
let percent = document.querySelector("#percent");
function addTen() {
  if (greenBar.style.width.length == 4) return;

  greenBar.style.width = `${+greenBar.style.width.slice(0, 2) + 10}%`;
  percent.innerText = `${+percent.innerText.slice(0, 2) + 10}%`;
}
