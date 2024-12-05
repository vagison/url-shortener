import express from 'express';

import { requestValidator } from '../middlewares';
import { slugController } from '../controllers';
import { urlValidatorSchema } from '../utils/schemas';

const slugRouter = express.Router();

slugRouter.post('/slug', requestValidator(urlValidatorSchema), slugController.create);
slugRouter.get('/:slug', slugController.get);

export default slugRouter;
