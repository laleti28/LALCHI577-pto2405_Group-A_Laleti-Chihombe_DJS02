const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  // Validation when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. input values required. Try again";
    return;
  }

  // Check if inputs are numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  // Non-numeric input handling
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    console.error(new Error("Non-numeric input provided."));
    document.body.innerHTML = "Something went wrong. Please reload the page";
    return;
  }

  // Invalid division
  if (dividerNum === 0) {
    console.error(new Error("Division by zero attempted."));
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
  }
  // Perform division and show result
  const divisionResult = Math.floor(dividendNum / dividerNum); // Ensure whole number
  result.innerText = divisionResult;
});