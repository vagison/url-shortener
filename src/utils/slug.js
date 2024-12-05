const CHARSET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// NB: does not validate input
function encode(int) {
  if (int === 0) {
    return CHARSET[0];
  }

  let res = '';
  while (int > 0) {
    res = CHARSET[int % 62] + res;
    int = Math.floor(int / 62);
  }
  return res;
}

function decode(str) {
  let res = 0,
    length = str.length,
    i,
    char;
  for (i = 0; i < length; i++) {
    char = str.charCodeAt(i);
    if (char < 58) {
      // 0-9
      char = char - 48;
    } else if (char < 91) {
      // A-Z
      char = char - 29;
    } else {
      // a-z
      char = char - 87;
    }
    res += char * Math.pow(62, length - i - 1);
  }
  return res;
}

function padWithZeros(input) {
  const str = String(input);
  return str.padStart(6, '0');
}

function removeLeadingZeros(input) {
  const str = String(input);
  let index = 0;
  while (index < str.length && str[index] === '0') {
    index++;
  }
  return str.slice(index) || '0';
}
export { encode, decode, padWithZeros, removeLeadingZeros };
