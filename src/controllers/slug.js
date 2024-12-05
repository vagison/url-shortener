import createHttpError from 'http-errors';
import { appConfig } from '../configs';
import { errorMessagesConstants, responseMessagesConstants } from '../constants';
import { SlugModel } from '../models';
import { decode, encode, padWithZeros, removeLeadingZeros } from '../utils/slug';

const get = async (req, res, next) => {
  try {
    const id = removeLeadingZeros(decode(req.params.slug));
    const slug = await SlugModel.findById(id);

    if (!slug) {
      throw createHttpError.NotFound(errorMessagesConstants.Slug.InvalidSlug);
    }

    return res.redirect(slug.url);
  } catch (error) {
    error.name = 'error getting the slug';
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const url = req.body.url;
    const result = await SlugModel.create({ url });
    const slug = { ...result };
    slug.slug = padWithZeros(encode(result.id));
    slug.slugURL = `${appConfig.appUrl}/${slug.slug}`;
    delete slug.id;
    delete slug.url;

    return res.status(201).json({
      message: responseMessagesConstants.Slug.SuccessfullyCreated,
      slug,
    });
  } catch (error) {
    next(error);
  }
};

export { create, get };
