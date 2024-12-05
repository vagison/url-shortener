import createHttpError from 'http-errors';
import { errorMessagesConstants } from '../constants';
import { stringIsAValidUrl } from './url';

const urlValidatorSchema = {
  url: {
    exists: {
      errorMessage: errorMessagesConstants.URL.URLRequested,
    },
    trim: true,
    custom: {
      options: (url) => {
        const isValidUrl = stringIsAValidUrl(url);

        if (!isValidUrl) {
          throw createHttpError.BadRequest(errorMessagesConstants.URL.InvalidURL);
        }

        return true;
      },
    },
  },
};

export { urlValidatorSchema };
