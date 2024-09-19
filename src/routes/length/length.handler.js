const { lenghtFormContext } = require("../../model/forms-context.model");
const getLenghtConversion = require("../../model/length.model");

const httpGetLengthHandler = (_, res) => {
  res.render('pages/form', lenghtFormContext);
};

const httpPostLengthHandler = (req, res) => {
  const { body: { fvalue, ffrom, fto } } = req;
  
  const toValue = getLenghtConversion({
    fromValue: fvalue,
    fromUnit: ffrom,
    toUnit: fto
  });

  res.render('pages/result', {
    fromValue: fvalue,
    fromUnit: ffrom,
    toValue,
    toUnit: fto
  });
};

module.exports = {
  httpGetLengthHandler,
  httpPostLengthHandler
};