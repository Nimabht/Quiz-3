let container = document.querySelector("#container");
let des = document.querySelector("#des");
let aha = document.createElement("div");
function lightMode() {
  des.children[0].innerText = "LIGHT MODE";
  des.style.backgroundColor = "#dddddd";
  des.style.color = "#000";
}

function darkMode() {
  des.children[0].innerText = "DARK MODE";
  des.style.backgroundColor = "#111d2b";
  des.style.color = "#dddddd";
}
