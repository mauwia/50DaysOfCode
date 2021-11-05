/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    let greatest = arr[arr.length - 1];
	let i = arr.length - 1;
    
	while (i >= 0) {
		let current = arr[i];
		arr[i] = greatest;
		if (current > greatest) {
			greatest = current;
		}
		i--;
	}
	arr[arr.length - 1] = -1;
	return arr;
};
///////////////////////
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let count = 0;
  // Loop for all the elements in the array
  for (let i = 0; i < nums.length; i++) {
    // If the current element is equal to the next element, we skip
    if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
      continue;
    }
    // We will update the array in place
    nums[count] = nums[i];
    count++;
  }
  return count;
};
/////////////////////////
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    var i=0;var count=0
    if(nums.length>1){
    while(i<nums.length){
        if(nums[i]==0){
            nums.push(nums.splice(i,1))
            i--;
        }
        i++;
        count++;
        if(count==nums.length-1){break}
    }}
};
/////////////////////////////
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let arr = [];
    for (let el of nums) {
        if (el % 2 === 0) {
            arr.unshift(el)
        } else { arr.push(el) }
    }
    return arr
};
////////////////////////////
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    while(nums.indexOf(val) !== -1){
    nums.splice(nums.indexOf(val),1)
    }
    };
//////////////////////
/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    let a = [...heights];
 let b = 0;

 heights.sort((a, b) => (a < b ? -1 : 1));

 for (let i = 0; i < heights.length; i++) {
   if (a[i] !== heights[i]) {
     b++;
   }
 }

 return b;
};
////////////////////////////////
/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let max_arr = [];
let nums_sorted = nums.slice();
nums_sorted.sort(function(a, b) {
    return parseInt(b) - parseInt(a);
});
max_arr[0] = nums_sorted[0];
for(let i = 1; i<nums_sorted.length; i++) {
    if(nums_sorted[i-1] !== nums_sorted[i]) {
        max_arr.push(nums_sorted[i]);
    }
    if(max_arr.length === 3) {
        return max_arr[2];
    }
}
return max_arr[0];
};
/////////////////////////////////
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    if(!nums || nums.length <= 1) return null
   
   // main case
   let result = []
   let unique = new Set(nums)

   for (let i = 0; i < nums.length; i++){
       if (!unique.has(i + 1)){
       result.push(i + 1)    
       }
   }
   return result
};
//////////////////////////
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    
    let result = nums.map(x => x ** 2);
        result.sort((a,b)=>a-b)
        return result
    };