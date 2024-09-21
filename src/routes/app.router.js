const express = require('express');
const lengthRouter = require('./length/length.router');
const weightRouter = require('./weight/weight.rooter');
const temperatureRouter = require('./temperature/temperature.rooter');
const errorRouter = require('./error/error.router');

const appRouter = express.Router();

appRouter.use('/', lengthRouter);
appRouter.use('/length', lengthRouter);
appRouter.use('/weight', weightRouter);
appRouter.use('/temperature', temperatureRouter);
appRouter.use('/error', errorRouter);

module.exports = appRouter;