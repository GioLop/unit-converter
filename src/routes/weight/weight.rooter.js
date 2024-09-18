const express = require('express');
const { httpPostWeightHandler, httpGetWeightHandler } = require('./weight.handler');

const weightRouter = express.Router();

weightRouter.get('/', httpGetWeightHandler);

weightRouter.post('/', httpPostWeightHandler);

module.exports = weightRouter;