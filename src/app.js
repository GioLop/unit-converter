const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const appRouter = require('./routes/app.router');
const errorHandler = require('./middlewares/errorHandler.middleware');

const app = express();

// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, '..','public')));

app.set('view engine', 'ejs');
// eslint-disable-next-line no-undef
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter);

app.use(errorHandler);

module.exports = app;