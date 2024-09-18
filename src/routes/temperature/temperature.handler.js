const { temperatureFormContext } = require("../../model/forms-context.model");

const httpTemperatureGetHandler = (_, res) => {
  res.render('pages/form', temperatureFormContext);
};

const httpTemperaturePostHandler = (req, res) => {
  console.log(req.body);
  res.render('pages/result');
};

module.exports = {
  httpTemperatureGetHandler,
  httpTemperaturePostHandler
};