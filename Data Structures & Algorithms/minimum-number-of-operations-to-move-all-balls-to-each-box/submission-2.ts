class Solution {
    /**
     * Example: "11011"
     * @param {string} boxes
     * @return {number[]}
     */
    minOperations(boxes: string): number[] {
        let ballSum = new Array(boxes.length + 1).fill(0);
        let preSum = new Array(boxes.length + 1).fill(0);

        for (let i = 0; i < boxes.length; i++) {
            ballSum[i + 1] = ballSum[i] + (boxes[i] == '1' ? 1 : 0);
            preSum[i + 1] = preSum[i] + (boxes[i] == '1' ? i : 0);
        }

        let result = [];

        for (let i = 0; i < boxes.length; i++) {
            let leftBalls = ballSum[i];
            let leftSum = preSum[i];
            let rightBalls = ballSum[boxes.length] - ballSum[i + 1];
            let rightSum = preSum[boxes.length] - preSum[i + 1];
            // Example: i = 2
            //         Left                 Right
            // [(2 - 0) + (2 - 1)] + [(3 - 2) + (4 - 2)]
            // [(2 * 2) - (0 + 1)] + [(3 + 4) - (2 * 2)]
            //   i * lb   leftsum    rightsum.   i * rb    
            result.push((i * leftBalls) - leftSum + rightSum - (i * rightBalls));
        } 

        return result;
    }
}
