var word = "SCIENCE";
var life = 6;
var correctNum = 0;

const drawHangmanFunctions = {
  0: function drawHead(ctx, strStyle) {
    // Draw Head
    ctx.strokeStyle = strStyle;
    ctx.beginPath();
    ctx.arc(150, 50, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  },
  1: function drawBody(ctx, strStyle) {
    // Body
    ctx.strokeStyle = strStyle;
    ctx.beginPath();
    ctx.moveTo(150, 60);
    ctx.lineTo(150, 90);
    ctx.stroke();
  },
  2: function drawLeftArm(ctx, strStyle) {
    // Left Arm
    ctx.strokeStyle = strStyle;
    ctx.beginPath();
    ctx.moveTo(150, 60);
    ctx.lineTo(130, 80);
    ctx.stroke();
  },
  3: function drawRightArm(ctx, strStyle) {
    // Right Arm
    ctx.strokeStyle = strStyle;
    ctx.beginPath();
    ctx.moveTo(150, 60);
    ctx.lineTo(170, 80);
    ctx.stroke();
  },
  4: function drawLeftLeg(ctx, strStyle) {
    // Left Leg
    ctx.strokeStyle = strStyle;
    ctx.beginPath();
    ctx.moveTo(150, 90);
    ctx.lineTo(130, 110);
    ctx.stroke();
  },
  5: function drawRightLeg(ctx, strStyle) {
    // Roght Leg
    ctx.strokeStyle = strStyle;
    ctx.beginPath();
    ctx.moveTo(150, 90);
    ctx.lineTo(170, 110);
    ctx.stroke();
  }
};

/**
 * Start Game
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

  initialDraw();
  setWord();
}

function initialDraw() {
  /**
   * Draw all hangman feature
   */
  const canvas = document.getElementById('hangman_canvas');
  const ctx = canvas.getContext('2d');
  const lineColor = 'black';

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';

  drawHanger(ctx, lineColor);
  for (i = 0; i < 6; i++)
    drawHangmanFunctions[i](ctx, lineColor);
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

function drawHanger(ctx, strStyle) {
  /**
   * Draw Hanger which contains
   * floor, pillar, and rope.
   */
  // Floor
  ctx.strokeStyle = strStyle;

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


/**
 * Logic Functions
 */

function response(character) {
  /**
   * React for user input or click
   */
  const letters = document.getElementById('letters');
  const letter = letters.childNodes[character.charCodeAt() - 64];

  letter.removeAttribute('onclick');

  if (word.search(character) === -1) {
    wrong(letter);

    if (life === 0)
      termination(life);
    return;
  }

  open(letter, character);
  
  if (correctNum === word.length)
    termination(life);
}

function open(letter, character) {
  alert('Correct!'+correctNum);

  const words = document.getElementById('word');
  let index = word.search(character);

  while (index !== -1) {
    word = word.replace(character, "\0");

    const correctPos = words.querySelector(`#word > div:nth-child(${index+2})`);
    correctPos.textContent = character;

    letter.classList.add('correct');
    index = word.search(character);

    correctNum++;
  }
}

function wrong(letterNode) {
  alert("Wrong!");

  letterNode.classList.add('wrong');
  life--;
  drawHangmanFunctions[life](
    document.getElementById('hangman_canvas').getContext('2d'),
    'cornflowerblue'
  );
}


/**
 * End Game
 */

function termination(isNormalTermination) {
  if (isNormalTermination === 0) {
    alert('You loose...');
  } else {
    alert('You Won!');
  }

  document.querySelectorAll('.letters').forEach(letterElement => {
    letterElement.removeEventListener('click', yourClickHandlerFunction);
  });
}

/**
 * Rendering
 */

document.addEventListener('DOMContentLoaded', initialize);