class Solution {
    /**
     * @param {string} boxes
     * @return {number[]}
     */
    minOperations(boxes: string): number[] {
        let balls = new Array<number>(boxes.length + 1).fill(0);
        let preSum = new Array<number>(boxes.length + 1).fill(0);
        for (let i = 0; i < boxes.length; i++) {
            balls[i + 1] = balls[i] + (boxes[i] == '1' ? 1 : 0);
            preSum[i + 1] = preSum[i] + (boxes[i] == '1' ? i : 0);
        }
        let result = [];
        for (let i = 0; i < boxes.length; i++) {
            const ballsAtLeft = balls[i];
            const leftSum = preSum[i];
            const ballsAtRight = balls[boxes.length] - balls[i + 1];
            const rightSum = preSum[boxes.length] - preSum[i + 1];
            result[i] = (i * ballsAtLeft) - leftSum + rightSum - (ballsAtRight * i)
        }
        return result;
    }
}
