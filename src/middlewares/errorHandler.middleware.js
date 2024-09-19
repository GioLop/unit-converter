const errorHandler = (err, req, res, next) => {
  if (err) {
    const { message } = err;
    res.send(message);
  }
  next();
};

module.exports = errorHandler;