import express from 'express';

import slugRouter from './slug';

const indexRouter = express.Router();

indexRouter.use('/slug', slugRouter);

export default indexRouter;
