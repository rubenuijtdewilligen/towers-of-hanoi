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

// Get elements from DOM
const title = document.getElementById('title');
const solutionDiv = document.getElementsByClassName('solution')[0];

// Get amount of disks from URL
const urlParams = new URLSearchParams(window.location.search);
const disks = parseInt(urlParams.get('disks'));

// Change title to display amount of disks
title.innerText = `Steps to solve a Towers of Hanoi problem with ${disks} disks:`;

// Function to solve the problem
let startTower = 2;
let endTower = 3;
let extraTower = `${6 - startTower - endTower}`;

let solutionArray = [];
let prev = 1;

function solve(start, destination, extra, number) {
  // Terminating condition
  if (number <= 0) {
    return;
  }

  solve(start, extra, destination, number - 1);

  let object = {
    step: `${prev++}`,
    disk: `${number}`,
    from: `${start}`,
    to: `${destination}`,
  };
  solutionArray.push(object);

  solve(extra, destination, start, number - 1);
  return solutionArray;
}

// Print solution to screen
solve(startTower, endTower, extraTower, disks);
solutionArray.forEach((step) => {
  let p = document.createElement('p');
  p.style.paddingBottom = '0px';
  p.style.marginBottom = '0px';
  p.innerHTML = `<b>${step.step}.</b> tower <i>${step.from}</i> ➜ tower <i>${step.to}</i>`;

  console.log(step);

  solutionDiv.appendChild(p);
});
