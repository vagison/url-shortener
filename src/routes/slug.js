import express from 'express';

import { slugController } from '../controllers';

const slugRouter = express.Router();

slugRouter.post('/slug', slugController.create);
slugRouter.get('/:slug', slugController.get);

export default slugRouter;
