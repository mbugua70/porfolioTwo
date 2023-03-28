import link from "./urls.mjs";
const idOne = document.getElementById("one");
const idTwo = document.getElementById("two");
const idThree = document.getElementById("three");
const idFour = document.getElementById("four");
const idFive = document.getElementById("five");
const idSix = document.getElementById("six");
const showEl = document.getElementById("show--container");

const ids = [idOne, idTwo, idThree, idFour, idFive, idSix];
ids.map((items) => {
  items.addEventListener("click", () => {
    link.map((Item) => {
      if (items.id === Item.id) {
        window.open(Item.url, "_self");
      }
    });
  });
});

window.addEventListener(
  "load",
  () => {
    showEl.style.width = "100%";
    showEl.style.opacity = "1";
    showEl.style.transition = "all ease-out 900ms";
  },
  false
);
