function calculateCollatz() {
  const numberInput = document.getElementById('numberInput').value;
  const truncatedCheckbox = document.getElementById('truncatedCheckbox').checked;
  const binaryCheckbox = document.getElementById('binaryCheckbox').checked;
  const resultDiv = document.getElementById('result');

  // Clear previous results
  resultDiv.innerHTML = '';

  // Check if the input is a positive whole number
  const number = parseInt(numberInput, 10);
  if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    resultDiv.innerHTML = '<p>Please enter a valid positive whole number.</p>';
    return;
  }

  let steps = 0;
  let collatzSequence = [number];

  // Calculate Collatz sequence
  while (number !== 1) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = 3 * number + 1;
    }

    collatzSequence.push(number);
    steps++;

    if (truncatedCheckbox && number % 2 === 0) {
      // Skip even numbers in truncated mode
      continue;
    }

    // Display intermediate steps in binary mode
    if (binaryCheckbox) {
      const binaryString = number.toString(2);
      const binarySum = (number + collatzSequence[steps - 1]).toString(2);
      resultDiv.innerHTML += `<p>Step ${steps}: ${binaryString} -> ${binarySum}</p>`;
    } else {
      resultDiv.innerHTML += `<p>Step ${steps}: ${number}</p>`;
    }
  }

  // Display total steps and full Collatz sequence
  resultDiv.innerHTML += `<p># Steps: ${steps}</p>`;
  resultDiv.innerHTML += `<p>Collatz Sequence: ${collatzSequence.join(', ')}</p>`;
}
