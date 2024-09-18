const express = require('express');
const lengthRouter = require('./length/length.router');
const weightRouter = require('./weight/weight.rooter');
const app = require('../app');
const temperatureRouter = require('./temperature/temperature.rooter');

const appRouter = express.Router();

appRouter.use('/', lengthRouter);
appRouter.use('/length', lengthRouter);
appRouter.use('/weight', weightRouter);
appRouter.use('/temperature', temperatureRouter);

module.exports = appRouter;