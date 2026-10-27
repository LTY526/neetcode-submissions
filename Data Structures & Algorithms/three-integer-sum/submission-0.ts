class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let target = 0;
        nums = nums.sort((a, b) => a - b);
        let result: number[][] = [];
        for (let i = 0; i < nums.length; i++) {
            let possibles = this.twoSum(nums, i + 1, target - nums[i]);
            for (var j = 0; j < possibles.length; j++) {
            var tuple = possibles[j];
                tuple.push(nums[i]);
                result.push(tuple);
            }
            // 跳过第一个数字重复的情况，否则会出现重复结果
            while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
        }
        return result;
    }

    twoSum(nums: number[], start: number, target: number): number[][] {
        let left = start;
        let right = nums.length - 1;
        let result: number[][] = [];
        while (left < right) {
            let num1 = nums[left];
            let num2 = nums[right];
            let sum = num1 + num2;
            if (sum == target) {
                result.push([nums[left], nums[right]]);
                while (left < right && nums[left] == num1) {
                    left++;
                }
                while (left < right && nums[right] == num2) {
                    right--;
                }
            }
            if (sum < target) {
                while (left < right && nums[left] == num1) {
                    left++;
                }
            } else {
                while (left < right && nums[right] == num2) {
                    right--;
                }
            }
        }
        return result;
    }
}
