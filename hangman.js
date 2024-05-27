var correctWord = 'science';


function initialize() {
  /**
   * Setting for hangman game.
   * Adding the letters divs for button
   */
  const lettersDiv = document.getElementById('letters');

  for (let i = 65; i < 91; i++) {
    const letter = String.fromCharCode(i);
    const letterElement = document.createElement('div');

    letterElement.textContent = letter;
    letterElement.classList.add('letters');
    lettersDiv.appendChild(letterElement);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initialize();
})