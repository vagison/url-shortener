import express from 'express';

import { slugController } from '../controllers';

const slugRouter = express.Router();

slugRouter.post('/', slugController.create);

export default slugRouter;
