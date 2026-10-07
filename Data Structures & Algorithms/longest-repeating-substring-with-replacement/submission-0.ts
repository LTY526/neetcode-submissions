class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        if (s.length == 1) return 1;
        const charCounts = new Array(26).fill(0);
        // max = highest frequency of any single char seen in the window SO FAR.
        // NOTE: this is intentionally "lazy" — it only ever increases and is NOT
        // recomputed when we shrink. After shrinking it may be stale (larger than
        // the true max in the current window). This is safe: a window that only
        // looks valid due to a stale max can never be longer than `best` already is.
        let max = 0;
        let left = 0;
        let right = 0;
        let best = 0;
        while (right < s.length) {
            charCounts[s.charCodeAt(right) - 65]++;
            // Only the newly added char's count increased, so it's the only one
            // that could become the new max frequency
            max = Math.max(max, charCounts[s.charCodeAt(right) - 65]);
            // A window is valid iff (windowLength - maxFreq) <= k,
            // i.e. the non-dominant characters can all be replaced within budget.
            // While invalid, shrink from the left until it becomes valid again.
            while ((right - left + 1) - max > k) {
                charCounts[s.charCodeAt(left) - 65]--;
                left++;
            }
            best = Math.max(best, (right - left + 1));
            right++;
        }
        return best;
    }
}
