// importing packages
import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import consola from 'consola';

// importing other stuff
import { connectToDb } from './utils/db';
import { corsConfig } from './configs';
import { errorLogger, errorHandler, invalidPathHandler } from './middlewares';
import indexRouter from './routes';
import path from 'path';

async function start() {
  await connectToDb();
  const app = express();
  const server = http.createServer(app);
  app.enable('trust proxy');
  app.use(
    morgan(
      '[:date[iso]] - :remote-addr - :user-agent - :method - :url - :status - :response-time ms'
    )
  );
  app.use(cors(corsConfig));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
  });
  app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ico', 'favicon.ico'));
  });
  app.use('/public', express.static(path.join(__dirname, 'public')));
  app.use('/', indexRouter);
  app.use(invalidPathHandler);
  app.use(errorLogger);
  app.use(errorHandler);
  const PORT = +process.env.PORT || 3000;
  server.listen(PORT, () => {
    consola.ready({
      message: `Server is listening on http://localhost:${PORT}`,
      badge: true,
    });
  });
}

start();
