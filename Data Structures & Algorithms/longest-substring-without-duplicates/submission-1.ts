class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const length = s.length;
        if (length <= 1) return length;
        const seen = new Set<string>();
        let max = 1;
        let p1 = 0;
        let p2 = 0;
        while (p2 < length) {
            while (seen.has(s[p2])) {
                seen.delete(s[p1]);
                p1++;
            }
            seen.add(s[p2]);
            max = Math.max(max, p2 - p1 + 1);
            p2++;
        }
        return max;
    }
}
