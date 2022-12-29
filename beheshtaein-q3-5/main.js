let tabList = document.querySelector("#tab-list");
let li = tabList.getElementsByTagName("li");
let tab = document.querySelector("#tab");
//declear dictionary
const map = [
  { county: "England", capital: "London" },
  { county: "Iran", capital: "Tehran" },
  { county: "Japan", capital: "Tokyo" },
];
//declear onclick function for each li
Array.from(li).forEach((item) => {
  item.addEventListener("click", (e) => {
    //reset
    let selectedCity = e.target.textContent;
    let index = map.findIndex((county) => county.capital === selectedCity);
    tab.children[0].innerText = map[index].capital;
    tab.children[1].innerText = `${map[index].capital} is the capital city of ${map[index].county}.`;
  });
});
