module.exports = (error, req, res, next) => {
  res.status(error.status);
  return res.json({
    error: {
      message: error.message,
    },
  });
};
