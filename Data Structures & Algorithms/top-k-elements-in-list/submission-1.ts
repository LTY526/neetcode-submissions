class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of map.entries()) {
            buckets[freq].push(num);
        }
        const res: number[] = [];
        for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {
            for (const num of buckets[i]) {
                res.push(num);
                if (res.length === k) return res;
            }
        }
        return res;
    }

    // Less optimized sort() for this question
    // topKFrequent(nums: number[], k: number): number[] {
    //     const map = new Map<number, number>();
    //     for (let num of nums) {
    //         map.set(num, (map.get(num) || 0) + 1);
    //     }
    //     return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(x => x[0]);
    // }
}
