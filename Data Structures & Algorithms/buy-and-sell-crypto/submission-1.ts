class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;
        if (prices.length <= 1) {
            return max;
        }
        for (let i = 0; i <= prices.length - 2; i++) {
            for (let j = i + 1; j <= prices.length - 1; j++) {
                let diff = prices[j] - prices[i];
                max = Math.max(max, diff);
            }
        }
        return max;
    }
}
