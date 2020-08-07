const container = document.querySelector(".container");
const reset = document.querySelector(".btn-reset");
const boxes = document.querySelectorAll(".box");

let defaultGrid = 16;
createTable(defaultGrid);

reset.addEventListener("click", function () {
  perSideGrid = prompt("how many squares per side to make the new grid");
  console.log(perSideGrid);
  createTable(perSideGrid);
});

//create table

function createTable(number) {
  container.innerHTML = "";
  for (i = 0; i < number; i++) {
    row = document.createElement("div");
    row.classList.add("row");

    for (j = 0; j < number; j++) {
      div = document.createElement("div");
      div.classList.add("box");
      div.addEventListener("mouseover", draw);

      row.appendChild(div);
    }

    container.appendChild(row);
  }
}

function draw(e) {
  e.target.style.background = "black";
}
