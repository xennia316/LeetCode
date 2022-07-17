/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let arr = [], fin;
    for(let i = 0; i < s.length; i++){
       
         if(s.charAt(i) == "I"){
            arr.push(1);
          }
         else if (s.charAt(i) == "V"){
            arr.push(5);
         }
         else if (s.charAt(i) == "X"){
            arr.push(10);
         }
        else if (s.charAt(i) == "L"){
            arr.push(50);
         }
        else if (s.charAt(i) == "C"){
           arr.push(100);
         }
        else if (s.charAt(i) == "D"){
           arr.push(500);
         }
        else if (s.charAt(i) == "M"){
           arr.push(1000);
        }
    }
  
 for (let i = 0; i < arr.length; i++){
   let j = i + 1;
   if (arr[i] < arr[j]){
     arr[j] = arr[j] - arr[i];
     arr[i] = 0;
   }
 }
  
  fin = arr.reduce((a, b) => {
    return a + b
  })
  
  return fin
};