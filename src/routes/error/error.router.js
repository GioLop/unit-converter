const express = require('express');
const { ERRORS } = require('../../lib/messages.lib');

const errorRouter = express.Router();

errorRouter.get('/', (req, res) => {
  const { query: { from, error } } = req;
  
  res.render('pages/error', {
    message: ERRORS[error],
    from
  })
});

module.exports = errorRouter;