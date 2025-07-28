const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const equalButton = document.querySelector(".equal");

buttons.forEach(button => {
  const value = button.getAttribute("data-value");

  if (value) {
    button.addEventListener("click", () => {
      if (value === "C") {
        display.value = "";
      } else {
        display.value += value;
      }
    });
  }
});

equalButton.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Invalid Expression");
    display.value = "";
  }
});
