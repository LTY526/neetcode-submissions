class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix = new Array<number>(nums.length).fill(1);
        let suffix = new Array<number>(nums.length).fill(1);
        prefix[0] = 1;
        suffix[suffix.length - 1] = 1;
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        for (let i = suffix.length - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix[i] * suffix[i];
        }
        return result;
    }
}
