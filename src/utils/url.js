const URL = require('url').URL;

function stringIsAValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch (err) {
    return false;
  }
}

export { stringIsAValidUrl };
