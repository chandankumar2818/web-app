// script.js
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;
    
    if (guess === secretNumber) {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
    } else if (guess < secretNumber) {
        setMessage('Too low. Try again.');
    } else {
        setMessage('Too high. Try again.');
    }
}

function setMessage(message) {
    document.getElementById('message').textContent = message;
}
