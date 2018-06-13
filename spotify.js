//Question 1
function sortByStrings(s, t) {
  if (s.length <= 1) return s;

  const pivot = s[0];
  const rest = s.slice(1);
  let stringLeft = "";
  let stringRight = "";

  for (let i = 0; i < rest.length; i++) {
    if (t.indexOf(rest[i]) >= t.indexOf(pivot)) {
      stringRight += rest[i];
    } else {
      stringLeft += rest[i];
    }
  }

  return sortByStrings(stringLeft, t) + pivot + sortByStrings(stringRight, t);
}


//Question 2
function decodeString(str) {
  let res = "";

  function _decode(str) {
    let i = 0;
    while (true) {
      if (str[i] === "[") {
        const num = parseInt(str[i - 1]);
        for (let j = 0; j < num; j++) {
          _decode(str.slice(i + 1));
        }
        break;
      }
      else if (str[i] === "]") {
        break;
      }
      else if (!parseInt(str[i])) {
        res += str[i];
      }
    }
  }

  _decode(str);
  return res;
}


//Question 3
function changePossibilities(amount, denominations) {
  let count = 0;
  function _makeChange(amount, currentIndex = 0) {
    if (amount === 0) {
      count += 1;
      return;
    }
    if (amount < 0) return;

    for (let i = currentIndex; i < denominations.length; i++) {
      amount -= denominations[i];
      _makeChange(amount, i);
    }
  }

  _makeChange(amount);
  return count;
}
