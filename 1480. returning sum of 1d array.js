/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let prod = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        prod.push(prod[i-1] + nums[i]);
    }
    return prod
};