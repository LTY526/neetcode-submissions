class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let n = prices.length;
        let dp = Array.from({ length: n }, () => Array(2).fill(0));
        // dp[index][0: sell, 1: buy]
        dp[0][0] = 0;
        dp[0][1] = -prices[0];
        for (let i = 1; i < prices.length; i++) {
            dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
            dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
        }
        return dp[prices.length - 1][0];
    }
}
