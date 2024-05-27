var word = "SCIENCE";
var life = 6;
var correctNum = 0;

/**
 * Initialization
 */

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
    letterElement.setAttribute('onclick', `response("${letter}")`);

    lettersDiv.appendChild(letterElement);
  }

  drawHangMan();
  setWord();
}

function setWord() {
  /**
   * Setup answer
   */
  const divWord = document.getElementById("word");
  
  for (i = 0; i < word.length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('blank');
    divWord.appendChild(newDiv);
  }
}


/**
 * About Canvas Tool
 */

function drawHangMan() {
  /**
   * Draw all hangman feature
   */
  const canvas = document.getElementById('hangman_canvas');
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';

  ctx.beginPath();
  ctx.moveTo(10, 130);
  ctx.lineTo(130, 130);
  ctx.stroke();

  drawHanger(ctx);
  drawHead(ctx);
  drawBody(ctx);
  drawLeftArm(ctx);
  drawRightArm(ctx);
  drawLeftLeg(ctx);
  drawRightLeg(ctx);
}

function drawHanger(ctx) {
  /**
   * Draw Hanger which contains
   * floor, pillar, and rope.
   */
  // Floor
  ctx.beginPath();
  ctx.moveTo(10, 130);
  ctx.lineTo(130, 130);
  ctx.stroke();

  // Pillar
  ctx.beginPath();
  ctx.moveTo(50, 130);
  ctx.lineTo(50, 10);
  ctx.lineTo(150, 10);
  ctx.lineTo(150, 20);
  ctx.stroke();

  // Rope
  ctx.beginPath();
  ctx.moveTo(150, 20);
  ctx.lineTo(150, 40);
  ctx.stroke();
}
function drawHead(ctx) {
  // Draw Head
  ctx.beginPath();
  ctx.arc(150, 50, 10, 0, Math.PI * 2, true);
  ctx.stroke();
}
function drawBody(ctx) {
  // Body
  ctx.beginPath();
  ctx.moveTo(150, 60);
  ctx.lineTo(150, 90);
  ctx.stroke();
}
function drawLeftArm(ctx) {
  // Left Arm
  ctx.beginPath();
  ctx.moveTo(150, 60);
  ctx.lineTo(130, 80);
  ctx.stroke();
}
function drawRightArm(ctx) {
  // Right Arm
  ctx.beginPath();
  ctx.moveTo(150, 60);
  ctx.lineTo(170, 80);
  ctx.stroke();
}
function drawLeftLeg(ctx) {
  // Left Leg
  ctx.beginPath();
  ctx.moveTo(150, 90);
  ctx.lineTo(130, 110);
  ctx.stroke();
}
function drawRightLeg(ctx) {
  // Roght Leg
  ctx.beginPath();
  ctx.moveTo(150, 90);
  ctx.lineTo(170, 110);
  ctx.stroke();
}

/**
 * Client-Server Methods
 */

function response(character) {
  /**
   * React for user input or click
   */
  let index = word.search(character);
  const letters = document.getElementById('letters');
  const letter = letters.childNodes[character.charCodeAt() - 64];
  const words = document.getElementById('word');

  letter.removeAttribute('onclick');

  if (index === -1) {
    alert("Wrong!");
    letter.classList.add('wrong');
    life--;
    return;
  }

  while (index !== -1) {
    word = word.replace(character, "\0");

    const correctPos = words.querySelector(`#word > div:nth-child(${index+2})`);
    correctPos.textContent = character;

    letter.classList.add('correct');
    index = word.search(character);

    correctNum++;
  }

  alert('Correct!'+correctNum);
  if (life === 0) {
    alert('You loose...');
  }
  if (correctNum === word.length) {
    alert('You Won!');
  }
}


/**
 * Rendering
 */

document.addEventListener('DOMContentLoaded', initialize);