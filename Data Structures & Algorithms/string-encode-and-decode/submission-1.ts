class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str 5#Hello5#World
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result = [];
        let idx = 0;
        while (idx < str.length) {
            let idx2 = idx;
            while (str[idx2] != '#') {
                idx2++;
            }
            let length = parseInt(str.slice(idx, idx2)); // 5
            idx = idx2 + 1; // H
            result.push(str.slice(idx, idx + length)); // Hello
            idx = idx + length;
        }
        return result;
    }
}
