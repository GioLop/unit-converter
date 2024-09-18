const { weightFormContext } = require("../../model/forms-context.model");

const httpGetWeightHandler = (_, res) => {
  res.render('pages/form', weightFormContext);
};

const httpPostWeightHandler = (req, res) => {
  console.log(req.body);
  res.render('pages/result')
};

module.exports = {
  httpGetWeightHandler,
  httpPostWeightHandler
};