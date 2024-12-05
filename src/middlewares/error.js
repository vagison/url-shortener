import PrettyError from 'pretty-error';

function errorLogger(error, req, res, next) {
  const pe = new PrettyError();
  console.log(pe.render(error));
  next(error);
}

function errorHandler(error, req, res, _) {
  const { statusCode, message, name, stack } = error;

  const err = {
    statusCode,
    message,
    name: process.env.NODE_ENV === 'development' ? name : undefined,
    stack: process.env.NODE_ENV === 'development' ? stack : undefined,
  };

  // TODO: improve
  if (name === 'ValidationError') {
    err.statusCode = 400;
    err.message = 'BadRequest';
  }

  if (!statusCode) {
    err.statusCode = 500;
    err.message = process.env.NODE_ENV === 'development' ? message : 'Internal server error';
  }

  return res.status(err.statusCode).json(err);
}

function invalidPathHandler(req, res) {
  const statusCode = 404;
  const message = 'Invalid path';

  const response = {
    message,
  };

  return res.status(statusCode).json(response);
}

export { errorLogger, errorHandler, invalidPathHandler };
