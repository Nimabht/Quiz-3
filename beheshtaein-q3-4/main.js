//function that checks if a string starts with a specefic word
function startsWith(str, word) {
  return str.lastIndexOf(word, 0) === 0;
}
//Select elements
let input = document.querySelector("#my-inp");
let ulist = document.querySelector("#ulist");
let li = ulist.getElementsByTagName("li");
//declear oninput function (filterList())
function filterList() {
  let filterMethod = input.value;
  for (let i = 0; i < li.length; i++) {
    if (startsWith(li[i].innerText, filterMethod)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
