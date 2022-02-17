const canvas = document.querySelector('.grid-container');

canvasWidth = 16;
canvasHeight = 16;

generateCanvas (canvasWidth, canvasHeight);
draw();

function generateCanvas(canvasWidth, canvasHeight) {
  let i = 0;
  while (i < (canvasWidth * canvasHeight)) {
    const gridPixel = document.createElement('div');
    gridPixel.setAttribute('class', 'grid-pixel');
    gridPixel.setAttribute('draggable', 'false');
    canvas.setAttribute('draggable', 'false');
    canvas.appendChild(gridPixel);
    i++;
  }
}

function draw() {
  let drawToggle = false;
  canvas.addEventListener('mousedown', () => {
    drawToggle = true;
  })
  canvas.addEventListener('mouseup', () => {
    drawToggle = false;
  })
  
  document.querySelectorAll('.grid-pixel').forEach(pixel => {
    pixel.style.opacity = 0;
    pixel.addEventListener('mouseover', () => {
      if (drawToggle) {
        pixel.style.backgroundColor = 'black';
        // const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); //"rainbow" mode
        // pixel.style.backgroundColor = randomColor;

        pixel.style.opacity = parseFloat(pixel.style.opacity) + 0.1; // https://stackoverflow.com/questions/12648007/how-to-increase-opacity-in-javascript
      }
      })
  })
}

const resetButton = document.querySelector('button');

resetButton.addEventListener('click', () => {
  reset();
})
  
function reset() {
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
    }
  canvasWidth = prompt("Canvas width (max 100):");
  canvasHeight = prompt("Canvas height (max 100):");
  if (canvasWidth > 100 || canvasWidth == "" || canvasWidth == undefined) {
    canvasWidth = 16;
  }
  if (canvasHeight > 100 || canvasHeight == "" || canvasHeight == undefined) {
    canvasHeight = 16;
  }
  document.documentElement.style.setProperty(`--columns`, canvasWidth);
  document.documentElement.style.setProperty(`--rows`, canvasHeight);
  generateCanvas (canvasWidth, canvasHeight);
  draw();
}