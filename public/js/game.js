/* Towers of Hanoi game remade in JavaScript
Copyright (C) 2021 Ruben Uijtdewilligen

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */

// Import tower elements from DOM
const towerContainer1 = document.getElementById('first-tower-container');
const towerContainer2 = document.getElementById('second-tower-container');
const towerContainer3 = document.getElementById('third-tower-container');
const tower1 = document.getElementById('first-tower');
const tower2 = document.getElementById('second-tower');
const tower3 = document.getElementById('third-tower');
const stepsTaken = document.getElementById('steps-taken');
const stepsMinimal = document.getElementById('steps-minimal');

// This JSON object stores what disks towers currently hold
const gameData = {
  1: [],
  2: [],
  3: [],
  selected: 0,
  steps: 0,
};

// This variable will store the tower the selected disk is currently part of
let prevTower;

// Get amount of disks from URL
const urlParams = new URLSearchParams(window.location.search);
const totalDisks = parseInt(urlParams.get('disks'));

// Calculate the minimal amount of steps required to solve the problem
const minimalSteps = Math.pow(2, totalDisks) - 1;

// Check if amount of disks is lower than 10 so that the game doesn't crash
if (totalDisks >= 10) {
  window.location.href = '/';
}

// Puts all disks on the second tower, then draws the game
function initGame(numberOfDisks) {
  for (i = 1; i < numberOfDisks + 1; i++) {
    gameData[2].push(i);
  }

  drawGame();
}
initGame(totalDisks);

function drawGame() {
  sortArrays();

  while (tower1.firstChild) {
    tower1.removeChild(tower1.firstChild);
  }

  while (tower2.firstChild) {
    tower2.removeChild(tower2.firstChild);
  }

  while (tower3.firstChild) {
    tower3.removeChild(tower3.firstChild);
  }

  // Draw disks
  for (i = 0; i < gameData[1].length + 1; i++) {
    tower1.appendChild(createDiskElement(i, gameData[1][i]));
  }

  for (i = 0; i < gameData[2].length + 1; i++) {
    tower2.appendChild(createDiskElement(i, gameData[2][i]));
  }

  for (i = 0; i < gameData[3].length + 1; i++) {
    tower3.appendChild(createDiskElement(i, gameData[3][i]));
  }

  writeStatistics();
}

function createDiskElement(i, id) {
  let disk = document.createElement(`div`);
  disk.classList.add(`disk`);
  disk.style.bottom = i * 20;
  disk.id = `disk-${id}`;

  return disk;
}

function writeStatistics() {
  stepsTaken.innerHTML = `<b>Steps Taken:</b> ${gameData.steps}`;
  stepsMinimal.innerHTML = `<b>Minimal Steps:</b> ${minimalSteps}`;
  return;
}

function sortArrays() {
  gameData[1].sort((a, b) => a - b);
  gameData[2].sort((a, b) => a - b);
  gameData[3].sort((a, b) => a - b);
}

towerContainer1.addEventListener('click', () => {
  moveOnClick(towerContainer1);
});

towerContainer2.addEventListener('click', () => {
  moveOnClick(towerContainer2);
});

towerContainer3.addEventListener('click', () => {
  moveOnClick(towerContainer3);
});

function moveOnClick(towerContainer) {
  sortArrays();

  let towerNumber;
  switch (towerContainer.id.split('-')[0]) {
    case 'first':
      towerNumber = 1;
      break;
    case 'second':
      towerNumber = 2;
      break;
    case 'third':
      towerNumber = 3;
      break;
  }

  // If there is a disk selected
  if (gameData.selected > 0) {
    gameData.steps++;
    if (
      gameData.selected <
      gameData[towerNumber][gameData[towerNumber].length - 1]
    )
      return swal({
        title: 'Error!',
        text: 'You must move the ring to a tower with a larger ring on top.',
        icon: 'error',
        button: false,
      }).then((value) => (gameData.selected = 0));
    gameData[prevTower].pop();
    gameData[towerNumber].push(gameData.selected);
    sortArrays();
    drawGame();

    if (gameData[1].length === totalDisks)
      return swal({
        title: 'You won!',
        text: 'You successfully moved all rings to another tower!',
        icon: 'success',
        button: false,
      }).then((value) => (window.location.href = '/'));

    if (gameData[3].length === totalDisks)
      return swal({
        title: 'You won!',
        text: 'You successfully moved all rings to another tower!',
        icon: 'success',
        button: false,
      }).then((value) => (window.location.href = '/'));

    return (gameData.selected = 0);
  }

  // Else select the top disk
  prevTower = towerNumber;
  gameData.selected = gameData[towerNumber][gameData[towerNumber].length - 1];
  sortArrays();
  return drawGame();
}
