/*
    This function should take an array of integers, and return one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise
*/

function isSortedAndHow(nums) {
    let ascending_flag = true
    let descending_flag = true
    for (let i=0; i<nums.length-1; i++){
        ascending_flag = ascending_flag && (nums[i]<= nums[i+1])
        descending_flag = descending_flag && (nums[i] >= nums[i+1])
    }
    if (ascending_flag) return  "yes, ascending"
    if (descending_flag) return  "yes, descending"
    if (!ascending_flag && !descending_flag) return "no"
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.isSortedAndHow = isSortedAndHow