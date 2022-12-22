// Complete the solution so that it reverses the string passed into it.


function solution(str){
    var splitString = str.split('')
    var reverseString = splitString.reverse()
    var joinArr = reverseString.join('')
    return joinArr 
  }