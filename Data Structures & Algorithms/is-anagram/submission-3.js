class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const stats = new Map();
        for (let char of s) {
            if (!stats.has(char)) {
                stats.set(char, 0);
            }
            stats.set(char, stats.get(char) + 1);
        }
        for (let char of t) {
           if (!stats.has(char)) {
                return false;
           }
           stats.set(char, stats.get(char) - 1);
           if (stats.get(char) == 0) {
            stats.delete(char);
           }
        }
        return stats.size == 0;
    }
}
