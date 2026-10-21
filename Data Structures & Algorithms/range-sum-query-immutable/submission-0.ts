class NumArray {
    private prefixSum: number[];

    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.prefixSum = new Array<number>(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}
