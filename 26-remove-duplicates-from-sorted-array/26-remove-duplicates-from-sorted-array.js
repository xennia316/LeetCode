/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = nums.length;
  let i = 0;
  if(k == 0){
    return 0
  }
  
  for(let j = 1; j < k; j++){
    if( nums[j] != nums[i]){
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1
};