function calculateCollatz() {
  const numberInput = document.getElementById('numberInput').value;
  const truncatedCheckbox = document.getElementById('truncatedCheckbox').checked;
  const binaryCheckbox = document.getElementById('binaryCheckbox').checked;
  const resultDiv = document.getElementById('result');

  // Clear previous results
  resultDiv.innerHTML = '';

  // Check if the input is a positive whole number
  const initialNumber = parseInt(numberInput, 10);
  if (isNaN(initialNumber) || initialNumber <= 0 || !Number.isInteger(initialNumber)) {
    resultDiv.innerHTML = '<p>Please enter a valid positive whole number.</p>';
    return;
  }

  let number = initialNumber;
  let steps = 0;

  // Calculate Collatz sequence
  while (number !== 1) {
    if (truncatedCheckbox && number % 2 === 0) {
      // Skip even numbers in truncated mode
    } else {
      // Display truncated steps in binary mode
      if (binaryCheckbox) {
        resultDiv.innerHTML += `<p>Step ${++steps}: ${number.toString(2)}</p>`;
      } else {
        resultDiv.innerHTML += `<p>Step ${++steps}: ${number}</p>`;
      }
    }

    // Update the number according to the Collatz sequence
    number = (number % 2 === 0) ? (number / 2) : (3 * number + 1);
  }

  // Display total steps and full Collatz sequence
  resultDiv.innerHTML += `<p># Steps: ${steps}</p>`;
  resultDiv.innerHTML += `<p>Collatz Sequence: ${initialNumber}</p>`;
}
