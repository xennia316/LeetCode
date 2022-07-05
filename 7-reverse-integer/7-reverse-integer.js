/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {   
    
    let temp = x;
    let reverse = 0;
    let last;
    
    
    if (x >= 0) {
        while(temp !== 0){
            last = temp % 10;
            reverse = reverse * 10 + last;
            temp = Math.floor(temp/10);
        }
    }
    
    if (x < 0) {
        temp *= -1;
        while(temp !== 0){
            last = temp % 10;
            reverse = reverse * 10 + last;
            temp = Math.floor(temp/10);
        }
        
        reverse *= -1;
    }
    
    if(reverse < (Math.pow(-2, 31)) || reverse > Math.pow(2, 31) - 1){
        reverse = 0;
    }  
    
    return reverse;
};