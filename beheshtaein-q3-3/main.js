let input = document.querySelector("#my-inp");
function validator() {
  inputValue = input.value;
  let lastChar = inputValue.slice(-1);
  if (lastChar === "-" || lastChar === ".") {
    input.value = inputValue.slice(0, -1) + "_";
  }
}
