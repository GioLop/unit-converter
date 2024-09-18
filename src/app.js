const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes/app.router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', appRouter);

module.exports = app;