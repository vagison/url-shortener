import express from 'express';

import slugRouter from './slug';

const indexRouter = express.Router();

indexRouter.use('/', slugRouter);

export default indexRouter;
