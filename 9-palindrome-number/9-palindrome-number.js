/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev = 0, last, temp = x;
  
    while(x >= 1){
      last = x % 10;
      rev = rev * 10 + last;
      x = Math.floor(x/10);
    }
  
  if(temp == rev){
    return true;
  }else{
    return false;
  }
};