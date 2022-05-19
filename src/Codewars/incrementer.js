function incrementer(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] + (i + 1);
            if (nums[i] >= 10) {
            nums[i] = nums[i] % 10;
        }
    }
    return nums
}

//console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]))
console.log(2 % 10);

// [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]