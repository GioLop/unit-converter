const { lenghtFormContext } = require("../../model/forms-context.model");

const httpGetLengthHandler = (_, res) => {
  res.render('pages/form', lenghtFormContext);
};

const httpPostLengthHandler = (req, res) => {
  console.log(req.body);
  res.render('pages/result', {});
};

module.exports = {
  httpGetLengthHandler,
  httpPostLengthHandler
};