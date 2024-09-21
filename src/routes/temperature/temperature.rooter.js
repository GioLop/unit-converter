const express = require('express');
const { httpTemperatureGetHandler, httpTemperaturePostHandler } = require('./temperature.handler');
const validateInput = require('../../middlewares/validateInput.middleware');
const validateUnits = require('../../middlewares/validateUnits.middleware');

const temperatureRouter = express.Router();

temperatureRouter.get('/', httpTemperatureGetHandler);

temperatureRouter.post(
  '/',
  validateInput,
  validateUnits,
  httpTemperaturePostHandler);

module.exports = temperatureRouter;