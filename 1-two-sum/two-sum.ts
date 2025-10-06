function twoSum(nums: number[], target: number): number[] {
    const compMap = new Map <number, number>

    for( let i = 0; i <= nums.length; i++){
        let currentNum = nums[i];
        let complement = target - currentNum;

        if(compMap.has(complement)){
            return [compMap.get(complement)!, i]
        }

        compMap.set(currentNum, i)
    }
};