/**
 * @param {number[]} nums
 * @return {number}
 */
//Given a binary array nums, return the maximum number of consecutive 1's in the array.

 var findMaxConsecutiveOnes = function(nums) {
    let result = 0;
   let current = 0;
   for(let n of nums) {
       if(n == 0) {
           result = Math.max(result, current);
           current = 0;
       } else {
           current++;
       }
   }
   return Math.max(result,current);
};

//Given an array nums of integers, return how many of them contain an even number of digits.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let current = 0;
    for(let n of nums) {
        if(n.toString().length%2==0) {
            current++;
        } 
    }
    return current;
};
//Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    let result = nums.map(x => x ** 2);
        result.sort((a,b)=>a-b)
        return result
    };  