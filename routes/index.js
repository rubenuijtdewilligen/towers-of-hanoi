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

// Bring in Node modules
const express = require('express');

// Set up Express router
const router = express.Router();

// Standalone routes
router.get('/', (req, res, next) => res.render('index'));
router.get('/game', (req, res, next) => res.render('game'));
router.get('/solve', (req, res, next) => res.render('solve'));

// Export the magic
module.exports = router;
