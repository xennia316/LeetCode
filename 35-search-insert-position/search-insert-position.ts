function searchInsert(nums: number[], target: number): number {
    nums.push(target)
    nums.sort((a, b) => a - b)
    let set = new Set(nums)

    console.log(nums, set)
    return [...set].indexOf(target)
};