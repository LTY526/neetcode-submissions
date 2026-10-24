class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix: number[][]): void {
        const flip = (arr: number[]): void => {
            let start = 0;
            let end = arr.length - 1;
            while (start < end) {
                [arr[start], arr[end]] = [arr[end], arr[start]];
                start++;
                end--;
            }
        }
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i; j < matrix.length; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            }
        }
        for (let m of matrix) {
            flip(m);
        }
    }
}
