class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */
    minSubarray(nums: number[], p: number): number {
        let total = nums.reduce((a, b) => a + b, 0);
        let remain = total % p;
        if (remain == 0) return 0;

        let curSum = 0;
        let cache = new Map<number, number>();
        cache.set(0, -1);
        let res = nums.length;
        for (let i = 0; i < nums.length; i++) {
            curSum = (curSum + nums[i]) % p;
            let prefix = ((curSum - remain) + p) % p;
            if (cache.has(prefix)) {
                res = Math.min(res, i - cache.get(prefix));
            }
            cache.set(curSum, i);
        }

        return res == nums.length ? -1 : res;
    }
}
