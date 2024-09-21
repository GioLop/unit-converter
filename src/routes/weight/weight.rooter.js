const express = require('express');
const { httpPostWeightHandler, httpGetWeightHandler } = require('./weight.handler');
const validateInput = require('../../middlewares/validateInput.middleware');
const validateUnits = require('../../middlewares/validateUnits.middleware');

const weightRouter = express.Router();

weightRouter.get('/', httpGetWeightHandler);

weightRouter.post(
  '/',
  validateInput,
  validateUnits,
  httpPostWeightHandler);

module.exports = weightRouter;