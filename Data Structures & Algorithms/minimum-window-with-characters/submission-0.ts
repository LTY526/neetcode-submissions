class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let need = new Map<string, number>();
        let currentHave = new Map<string, number>();
        for (let char of t) {
            need.set(char, (need.get(char) || 0) + 1);
        }
        let start = 0;
        let count = Infinity;
        let left = 0;
        let right = 0;
        let validChar = 0;
        while (right < s.length) {
            // let c = s[right];
            if (need.has(s[right])) {
                currentHave.set(s[right], (currentHave.get(s[right]) || 0) + 1);
                if (currentHave.get(s[right]) == need.get(s[right])) {
                    validChar++;
                }
            }
            right++;

            while (validChar == need.size) {
                if (right - left < count) {
                    start = left;
                    count = right - left;
                }
                if (need.has(s[left])) {
                    if (currentHave.get(s[left]) == need.get(s[left])) {
                        validChar--;
                    }
                    currentHave.set(s[left], (currentHave.get(s[left]) || 0) - 1);
                }
                left++;
            }
        }

        return count == Infinity ? "" : s.substring(start, start + count);
    };
}
