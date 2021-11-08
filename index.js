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
require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');

// Initialize Express
const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/static', express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', require('./routes/index.js'));
app.use((req, res, next) => {
  res.status(404).render('404');
});

// Start listening
const PORT = process.env.PORT || 1337;
app.listen(PORT, console.log(`The magic happens on port ${PORT}`));
