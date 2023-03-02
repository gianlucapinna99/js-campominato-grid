"use strict"


const board = document.querySelector('.board');
const select = document.querySelector('.selection');
const playBtn = document.querySelector('.play');

let numRows = 10;
let numCols = 10;

function generateGrid() {
  
    board.innerHTML = '';
  const difficulty = select.value;
  if (difficulty === '1') {
    numRows = 10;
    numCols = 10;
  } else if (difficulty === '2') {
    numRows = 9;
    numCols = 9;
  } else if (difficulty === '3') {
    numRows = 7;
    numCols = 7;
  }

  // Generate the grid
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const cell = document.createElement('div');
      cell.classList.add(`cell-${difficulty}`);
      cell.textContent = row * numCols + col + 1;
      cell.addEventListener('click', handleCellClick);
      board.appendChild(cell);
    }
  }
}

function handleCellClick(event) {
  event.target.style.backgroundColor = 'blue';
  console.log(event.target.textContent);
}

playBtn.addEventListener('click', generateGrid);