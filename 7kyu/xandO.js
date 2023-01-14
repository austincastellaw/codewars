// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  str = str.toLowerCase();
  var xCount = 0
  var oCount = 0
  for (let char of str){
    if (char === 'x'){
      xCount++
    }else if(char === 'o'){
      oCount++ 
    }
  }
  return xCount === oCount 
}