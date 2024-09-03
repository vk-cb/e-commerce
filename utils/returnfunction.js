exports.handleErrorResponse = (res, statusCode, errorMessage) => {
    return res.status(statusCode).json({ error: errorMessage });
  };
exports.handleSuccessResponse = (res, statusCode, successMessage, data) => {
    return res.status(statusCode).json({ msg: successMessage, data : data || [] });
  };