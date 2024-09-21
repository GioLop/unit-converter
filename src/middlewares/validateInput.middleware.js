const validateInput = (req, _, next) => {
  const { body: { fvalue } } = req;
  
  if (isNaN(fvalue)) {
    throw new Error('no_a_number');
  }

  if (!fvalue) {
    throw new Error('empty_value');
  }

  next();
}

module.exports = validateInput;