const {
  transformMap,
  classMap,
} = require("../../model/weight.model");
const { weightFormContext } = require("../../model/forms-context.model");
const { getConversion } = require("../../lib/conversion.lib");

const httpGetWeightHandler = (_, res) => {
  res.render('pages/form', weightFormContext);
};

const httpPostWeightHandler = (req, res) => {
  const { body: { fvalue, ffrom, fto } } = req;
  
  const toValue = getConversion({
    fromValue: fvalue,
    fromUnit: ffrom,
    toUnit: fto,
    classMap,
    transformMap
  });

  res.render('pages/result', {
    fromValue: fvalue,
    fromUnit: ffrom,
    toValue,
    toUnit: fto
  });
};

module.exports = {
  httpGetWeightHandler,
  httpPostWeightHandler
};