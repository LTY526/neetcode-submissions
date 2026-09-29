class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix = new Array<number>(nums.length).fill(1);
        let prefix2 = new Array<number>(nums.length).fill(1);
        prefix[0] = 1;
        prefix2[prefix2.length - 1] = 1;
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        for (let i = prefix2.length - 2; i >= 0; i--) {
            prefix2[i] = nums[i + 1] * prefix2[i + 1];
        }
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix[i] * prefix2[i];
        }
        return result;
    }
}
