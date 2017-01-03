// NOT COMPLETED

function nextBigger(n) {
  var numString = n.toString();
  var numArrs = [];
  var numArrsChangeChecker = [];
  var tempHolder = 0;
  var tempHolder2 = 0;
  var newNum = 0;
  while (numArrs.length < numString.length) {
    for (var i = 0; i < numString.length; i++) {
      numArrs.push(numString.charAt(i));
    }
  }
  numArrsChangeChecker = numArrs;
  while (numArrsChangeChecker === numArrs) {
    for (var j = numArrs.length -1; j > 0; j--) {
      if (numArrs[j] > numArrs[j-1]) {
        tempHolder = numArrs[j];
        tempHolder2 = numArrs[j-1];
        numArrs[j] = tempHolder2;
        numArrs[j-1] = tempHolder;
      }
    }
  }
  for (var k = numArrs.length -1; k > 0; k--) {
    var numberDecimalPlaceHolder = 1;
    newNum = newNum + numArrs[k] * numberDecimalPlaceHolder;
    numberDecimalPlaceHolder *= 10;
  }
  return (newNum);
}
nextBigger(123);
