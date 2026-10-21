class NumArray {
    private preSum: number[];
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.preSum = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.preSum[i + 1] = this.preSum[i] + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.preSum[right + 1] - this.preSum[left];
    }
}
