class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let preSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            preSum[i + 1] = preSum[i] + nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            let left = preSum[i] - preSum[0];
            let right = preSum[nums.length] - preSum[i + 1];
            if (left == right) return i;
        }
        return -1;
    }
}
