class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;
        let need = new Array<number>(26).fill(0);
        let have = new Array<number>(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            need[s1.charCodeAt(i) - 97]++;
        }
        for (let i = 0; i < s2.length; i++) {
            have[s2.charCodeAt(i) - 97]++;
            if (i >= s1.length) {
                have[s2.charCodeAt(i - s1.length) - 97]--;
            }
            if (i >= s1.length - 1) {
                let same = true;
                for (let j = 0; j < 26; j++) {
                    if (need[j] !== have[j]) {
                        same = false;
                        break;
                    }
                }
                if (same) return true;
            }
        }
        return false;
    }
}
