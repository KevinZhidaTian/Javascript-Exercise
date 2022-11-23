/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.

    For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
*/

function sumTwoSmallestNumbers(nums) {
    // nums.sort(function(a,b){return a-b})
    
    // bobble sort
    for (let i=0; i<nums.length; i++){
        let already_sorted = true
        for(let j=0; j<nums.length-i; j++){
            if (nums[j]>nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
                already_sorted = false
            }
        }
        if (already_sorted) break
    }
    return nums[0]+nums[1]
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.sumTwoSmallestNumbers = sumTwoSmallestNumbers