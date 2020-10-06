module.exports = function check(str, bracketsConfig) {
  let len = str.length;
  str = str.split('');
  let configLen = bracketsConfig.length;
  let strSecond = [...str];
  let start, end;
  let j;

  if (len % 2) return false;

  bracketsConfig.forEach(conf => {
    start = conf[0];
    end = conf[1];
    if (start == end) {
      j = 0;
    } else j = 1;
    for (let i = 0; i < len; i++) {
      if (str[i] == start) {
        for (j; j < len; j++) {
          if (str[j] == end) {
            for (let n = j; n >= i; n--) {
              if ((str[j - 1] != end) && (str[j - 1] != start) && 
                 ((str[j - 2] == end) || (str[j - 2] == start))) return false;
              // if (((j - n - 1) % 2) != 0) return false;
              if (str[n] == start) {
                str[n] = '';
                str[j] = '';
                break;
              }
            }
          }
        }
      }
    }
  });
  console.log(str);
  if (str.join('').length == 0) {
    return true;
  } else {
    return false;
  }
}
