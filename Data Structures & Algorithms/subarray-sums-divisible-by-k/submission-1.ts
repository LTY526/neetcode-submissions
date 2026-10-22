class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysDivByK(nums: number[], k: number): number {
        let preSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            preSum[i + 1] = preSum[i] + nums[i];
        }
        let result = 0;
        let cache = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            let prev = ((preSum[i] % k) + k) % k;
            cache.set(prev, (cache.get(prev) ?? 0) + 1);
            let remain = ((preSum[i + 1] % k) + k) % k;
            result += cache.get(remain) ?? 0;
        }
        return result;
    }
}
