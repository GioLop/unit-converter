const path = require('path');
const express = require('express');
const appRouter = require('./routes/app.router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.engine('ejs', require('ejs').__express);

app.use('/', appRouter);

module.exports = app;