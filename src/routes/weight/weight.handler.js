const weightContext = {
  type: 'Weight',
  units: ['Milligram', 'Gram', 'Kilogram', 'Ounce', 'Pound'],
  formHandler: '/weight',
  method: 'post'
};

const httpGetWeightHandler = (_, res) => {
  res.render('pages/form', weightContext);
};

const httpPostWeightHandler = (req, res) => {
  console.log(req.body);
  res.render('pages/result')
};

module.exports = {
  httpGetWeightHandler,
  httpPostWeightHandler
};