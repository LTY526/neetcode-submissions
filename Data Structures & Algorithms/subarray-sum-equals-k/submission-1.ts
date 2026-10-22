class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let preSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            preSum[i + 1] = preSum[i] + nums[i];
        }
        let possible = 0;
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                // console.log(i, j);
                let sum = preSum[j + 1] - preSum[i];
                if (sum == k) possible++;
            }
        }
        return possible;
    }

    subarraySum2(nums: number[], k: number): number {
        let preSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            preSum[i + 1] = preSum[i] + nums[i];
        }
        let possible = 0;
        let visited = new Map<string, boolean>();
        let traverse = (start: number, end: number): void => {
            let sum = preSum[end + 1] - preSum[start];
            if (sum == k) {
                if (!visited.has(`${start},${end}`)) {
                    visited.set(`${start},${end}`, true);
                    possible++;
                }
            } else {
                if (!visited.has(`${start},${end}`)) {
                    visited.set(`${start},${end}`, false);
                }
            }
            if (start < nums.length && start < end) {
                traverse(start + 1, end);
            }
            if (end < nums.length) {
                traverse(start, end + 1);
            }
        };
        traverse(0, 0);
        return possible;
    }
}
