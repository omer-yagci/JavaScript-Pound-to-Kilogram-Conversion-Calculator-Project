const kilograms = document.querySelector("#converted-value");
const inputBox = document.querySelector("#pounds");

inputBox.addEventListener("keypress", (e) => {
  const getData = inputBox.value;

  if (getData < 0) {
    kilograms.innerHTML = "There is no Valid Value";
  } else {
    kilograms.innerHTML = `${getData * 0.4535 * 10} `;
    kilograms.style.color = "orange";
  }
});
