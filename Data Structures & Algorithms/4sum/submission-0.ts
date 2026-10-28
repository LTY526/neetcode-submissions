class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        nums = nums.sort((a, b) => a - b);
        return this.nSum(4, nums, target, 0);
    }

    nSum(n: number, nums: number[], target: number, start: number): number[][] {
        let res = [];
        // at least should be 2Sum, and the size of the array should not be less than n
        if (n < 2 || nums.length < n) return res;
        if (n == 2) {
            res.push(...this.twoSum(nums, target, start));
        } else {
            for (let i = start; i < nums.length; i++) {
                let possibles = this.nSum(n - 1, nums, target - nums[i], i + 1);
                for (let p of possibles) {
                    p.push(nums[i]);
                    res.push(p);
                }
                while (i < nums.length - 1 && nums[i] == nums[i + 1]) i++;
            }
        }
        return res;
    }

    twoSum(nums: number[], target: number, start: number): number[][] {
        let res = [];
        let left = start;
        let right = nums.length - 1;
        while (left < right) {
            let num1 = nums[left];
            let num2 = nums[right];
            let sum = num1 + num2;
            if (sum == target) {
                res.push([num1, num2]);
                while (left < right && nums[left] == num1) left++;
                while (left < right && nums[right] == num2) right--;
            } else if (sum < target) {
                while (left < right && nums[left] == num1) left++;
            } else { // sum > target
                while (left < right && nums[right] == num2) right--;
            }
        }
        return res;
    }
}
