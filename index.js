const inputNumber = document.querySelector(".number");
const resultNumber = document.querySelector(".result");

inputNumber.addEventListener("input", handleInput);

function handleInput(e) {
  const inputedString = e.target.value;

  if (inputedString === "") {
    resultNumber.textContent = "";
  } else if (Number(inputedString) === "NaN") {
    alert('Fill please only number from "0" till "20"');
    inputNumber.value = "";
  } else {
    const x = Number(inputedString);
    resultNumber.textContent = getFibonacciNumber(x);
  }
}

function getFibonacciNumber(x) {
  if (x <= 1) return x;

  let a = 0,
    y = 1;
  let temporary;
  for (let i = 2; i <= x; i++) {
    temporary = y;
    y = a + y;
    a = temporary;
  }
  return y;
}
