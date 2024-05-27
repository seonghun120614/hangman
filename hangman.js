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

  drawHangMan();
}

function drawHangMan() {
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


document.addEventListener('DOMContentLoaded', () => {
  initialize();
});