class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let n = prices.length;
        let dp = Array.from({ length: n }, () => Array(2).fill(0));
        // dp[index][0: cash, 1: hold]
        dp[0][0] = 0;
        dp[0][1] = -prices[0];
        for (let i = 1; i < prices.length; i++) {
            // cash = max(cash, hold + prices[i])
            dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
            // hold = max(hold, -prices[i])
            dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
        }
        return dp[prices.length - 1][0];
    }
}
