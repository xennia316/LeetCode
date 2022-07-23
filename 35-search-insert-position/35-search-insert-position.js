/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i, numsLength = nums.length;
 
     for(i = 0; i < numsLength; i++){
         if(nums[i] == target){
             return i;
             break;
       }
         else if(nums[i] > target){
             return i;
             break;
        }
        else if (target > nums[numsLength - 1]){
              return numsLength
        } 
     }
};