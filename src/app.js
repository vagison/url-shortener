// importing packages
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import consola from 'consola';

// importing other stuff
import { connectToDb } from './utils/db';

import { errorLogger, errorHandler, invalidPathHandler } from './middlewares';
import indexRouter from './routes';

async function start() {
  await connectToDb();
  const app = express();
  const server = http.createServer(app);
  app.enable('trust proxy');
  app.use(morgan('[:date[iso]] - :remote-addr - :user-agent - :method - :url - :status - :response-time ms'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/', indexRouter);
  app.use(invalidPathHandler);
  app.use(errorLogger);
  app.use(errorHandler);
  const PORT = +process.env.PORT || 3000;
  server.listen(PORT, () => {
    consola.ready({
      message: `Server is listening on http://127.0.0.1:${PORT}`,
      badge: true,
    });
  });
}

start();
