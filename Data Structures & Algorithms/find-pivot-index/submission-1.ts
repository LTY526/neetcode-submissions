class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        let prefixSum = new Array<number>(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            let leftend = i;
            let leftstart = 0;
            let rightend = nums.length;
            let rightstart = leftend + 1;
            let left = prefixSum[leftend] - prefixSum[leftstart];
            let right = prefixSum[rightend] - prefixSum[rightstart];
            if (left == right) return i;
        }
        return -1;
    }
}
