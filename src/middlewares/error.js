import path from 'path';
import PrettyError from 'pretty-error';
import { errorMessagesConstants } from '../constants';

function errorLogger(error, req, res, next) {
  const pe = new PrettyError();
  console.log(pe.render(error));
  next(error);
}

function errorHandler(error, req, res, _) {
  const { statusCode, message, name, stack } = error;

  if (
    message === errorMessagesConstants.Slug.InvalidSlug ||
    name === 'error getting the slug'
  ) {
    return res
      .status(404)
      .sendFile(path.join(__dirname, '..', 'public', 'html', '404.html'));
  }

  const err = {
    statusCode,
    message,
    name: process.env.NODE_ENV === 'development' ? name : undefined,
    stack: process.env.NODE_ENV === 'development' ? stack : undefined,
  };

  if (name === 'ValidationError') {
    err.statusCode = 400;
    err.message = error.message;
  }

  if (!statusCode) {
    err.statusCode = 500;
    err.message =
      process.env.NODE_ENV === 'development'
        ? message
        : 'Internal server error';
  }

  return res.status(err.statusCode).json(err);
}

function invalidPathHandler(req, res) {
  const statusCode = 404;

  return res
    .status(statusCode)
    .sendFile(path.join(__dirname, '..', 'public', 'html', '404.html'));
}

export { errorLogger, errorHandler, invalidPathHandler };
