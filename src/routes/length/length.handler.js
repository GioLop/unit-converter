const lenghtContext = {
  type: 'Length',
  units: ['Millimeter', 'Centimeter', 'Meter', 'Kilometer', 'Inch', 'Foot', 'Yard', 'Mile'],
  formHandler: '/length',
  method: 'post'
};

const httpGetLengthHandler = (_, res) => {
  res.render('pages/form', lenghtContext);
};

const httpPostLengthHandler = (req, res) => {
  console.log(req.body);
  res.render('pages/result', {});
};

module.exports = {
  httpGetLengthHandler,
  httpPostLengthHandler
};