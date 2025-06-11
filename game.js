const secretNumber = Math.floor(Math.random() * 5000) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");

  if (isNaN(guess) || guess < 1 || guess > 5000) {
    message.textContent = "Please enter a valid number between 1 and 5000.";
    message.style.color = "#e53e3e";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    message.textContent = '🎉 Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.';
    message.style.color = "#2f855a";
    document.getElementById("guessInput").disabled = true;
  } else if (guess < secretNumber) {
    message.textContent = "🔼 It's higher than that. Try again!";
    message.style.color = "#2b6cb0";
  } else {
    message.textContent = "🔽 It's lower than that. Try again!";
    message.style.color = "#b83280";
  }

  document.getElementById("guessInput").value = "";
}