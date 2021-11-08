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
const menuForm = document.getElementById('menu');

function startGame() {
  // Get the amount of disks from the form
  const formData = new FormData(menuForm);
  const disks = formData.get('disks');

  // If the field is empty, just return
  if (disks < 1) return;

  // Send user to game
  window.location.href = `/game?disks=${disks}`;
}

function solve() {
  // Get the amount of disks from the form
  const formData = new FormData(menuForm);
  const disks = formData.get('disks');

  // If the field is empty, just return
  if (disks < 1) return;

  // Send user to solver
  window.location.href = `/solve?disks=${disks}`;
}
