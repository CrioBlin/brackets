module.exports = function check(str, bracketsConfig) {
  let len = str.length;

  if (len % 2) return false;

  while(str) {
    let counter = 0;

    for (let i of bracketsConfig){
      let conf = i[0] + i[1];

      if(str.includes(conf)) {
        str = str.replace(conf, '');
        counter += 1;
      }
    }
    if (counter == 0) break;
  }
  return str == '' ? true : false;
}
