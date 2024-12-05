import { responseMessagesConstants } from '../constants';

const create = async (req, res, next) => {
  try {
    const url = req.body.url;
    const slug = 'aaa_' + url;
    return res.status(201).json({
      message: responseMessagesConstants.Slug.SuccessfullyCreated,
      slug,
    });
  } catch (error) {
    next(error);
  }
};

export { create };
