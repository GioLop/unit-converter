const {
  transformMap,
  classMap,
} = require("../../model/temperature.model");
const { temperatureFormContext } = require("../../model/forms-context.model");
const { getConversion } = require("../../lib/conversion.lib");

const deleteGradeChar = (string) => string.replace('°', '');

const httpTemperatureGetHandler = (_, res) => {
  res.render('pages/form', temperatureFormContext);
};

const httpTemperaturePostHandler = (req, res) => {
  const { body: { fvalue, ffrom, fto } } = req;
  const { handler } = temperatureFormContext

  const toValue = getConversion({
    fromValue: fvalue,
    fromUnit: deleteGradeChar(ffrom),
    toUnit: deleteGradeChar(fto),
    classMap,
    transformMap
  });

  res.render('pages/result', {
    type: 'Temperature',
    fromValue: fvalue,
    fromUnit: ffrom,
    toValue,
    toUnit: fto,
    handler
  });
};

module.exports = {
  httpTemperatureGetHandler,
  httpTemperaturePostHandler
};