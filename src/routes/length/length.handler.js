const { getConversion } = require("../../lib/conversion.lib");
const { lenghtFormContext } = require("../../model/forms-context.model");
const {
  transformMap,
  classMap,
} = require("../../model/length.model");

const httpGetLengthHandler = (_, res) => {
  res.render('pages/form', lenghtFormContext);
};

const httpPostLengthHandler = (req, res) => {
  const { body: { fvalue, ffrom, fto } } = req;
  const { handler } = lenghtFormContext;
  
  const toValue = getConversion({
    fromValue: fvalue,
    fromUnit: ffrom,
    toUnit: fto,
    classMap,
    transformMap
  });

  res.render('pages/result', {
    type: 'Length',
    fromValue: fvalue,
    fromUnit: ffrom,
    toValue,
    toUnit: fto,
    handler
  });
};

module.exports = {
  httpGetLengthHandler,
  httpPostLengthHandler
};