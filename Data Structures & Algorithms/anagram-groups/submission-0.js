class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const isAnagram = (s, t) => {
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
        if (strs.length == 0) return [];
        const groups = [];
        groups.push([strs[0]]);
        if (strs.length == 1) return groups;
        for (let i = 1; i < strs.length; i++) {
            let found = false;
            for (let j = 0; j < groups.length; j++) {
                if (isAnagram(strs[i], groups[j][0])) {
                    groups[j].push(strs[i]);
                    found = true;
                    break;
                }
            }
            if (!found) {
                groups.push([strs[i]]);
            }
        }
        return groups;
    }
}
