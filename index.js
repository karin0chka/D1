const result = document.getElementById("counter-result");
const resultPlus = document.getElementById("counter-plus");
const resultMinus = document.getElementById("counter-minus");

result.innerText = 0;

resultPlus.addEventListener("click", () => {
  result.innerText = Number(result.textContent) + 1;
});

resultMinus.addEventListener("click", () => {
    result.innerText = Number(result.textContent) - 1;
});
