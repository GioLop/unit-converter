const express = require('express');
const lengthRouter = require('./length/length.router');

const appRouter = express.Router();

appRouter.use('/', lengthRouter);
appRouter.use('/length', lengthRouter);

module.exports = appRouter;