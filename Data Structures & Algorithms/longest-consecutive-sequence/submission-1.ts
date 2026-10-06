class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let max = 0;
        let numSet = new Set<number>(nums);
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (!numSet.has(num - 1)) { // if its the "smallest" element
                // try to find consecutive sequence
                let curr = 1;
                while (numSet.has(num + 1)) {
                    curr++;
                    num++;
                }
                max = Math.max(curr, max);
            }

        }
        return max;
    }

    // slower because we would waste alot time checking on larger element (alot of uncessary checks)
    longestConsecutiveSlow(nums: number[]): number {
        let max = 0;
        let numSet = new Set<number>(nums);
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let curr = 1;
            while (numSet.has(num - 1)) {
                curr++;
                num--;
            }
            max = Math.max(curr, max);
        }
        return max;
    }
}
