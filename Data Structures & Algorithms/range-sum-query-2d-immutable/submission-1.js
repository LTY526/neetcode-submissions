class NumMatrix {
    preSum;

    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        this.preSum = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                this.preSum[i][j] = matrix[i-1][j-1] + this.preSum[i][j-1] + this.preSum[i-1][j] - this.preSum[i-1][j-1];
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        return this.preSum[row2 + 1][col2 + 1] - this.preSum[row2 + 1][col1] - this.preSum[row1][col2 + 1] + this.preSum[row1][col1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
