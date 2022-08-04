let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  if (count == 0) {
    return;
  }
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = countEl.textContent = 0;
}

function reset() {
  count = 0;
  saveEl.textContent = "";
  countEl.textContent = 0;
}
