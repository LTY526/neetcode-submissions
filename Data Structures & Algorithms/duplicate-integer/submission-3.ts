class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const appeared = new Set<number>();
        for (let i = 0; i < nums.length; i++) {
            if (appeared.has(nums[i])) {
                return true;
            }
            appeared.add(nums[i]);
        }
        return false;
    }
}
