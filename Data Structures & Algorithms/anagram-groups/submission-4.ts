class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length == 0) return [];
        const seen = new Map<string, string[]>();
        for (let i = 0; i < strs.length; i++) {
            const key = this.generateKey(strs[i]);
            if (!seen.has(key)) {
                seen.set(key, []);
            }
            seen.get(key).push(strs[i]);
            // seen.set(key, [...(seen.get(key) || []), strs[i]]);
        }
        return Array.from(seen.values());
    }

    generateKey(str: string): string {
        return str.split('').sort().join('');
    }

    // Slow
    // groupAnagrams(strs: string[]): string[][] {
    //     if (strs.length == 0) return [];
    //     const group: string[][] = [];
    //     group.push([strs[0]]);
    //     for (let i = 1; i < strs.length; i++) {
    //         let done = false;
    //         for (let j = 0; j < group.length; j++) {
    //             if (strs[i].length != group[j][0].length) continue;
    //             const valid = this.isAnagram(strs[i], group[j][0]);
    //             if (!valid) continue;
    //             group[j].push(strs[i]);
    //             done = true;
    //             break;
    //         }
    //         if (done) continue;
    //         group.push([strs[i]]);
    //     }
    //     return group;
    // }

    // isAnagram(str1: string, str2: string): boolean {
    //     if (str1.length != str2.length) return false;
    //     const seen = new Map<string, number>();
    //     for (let i = 0; i < str1.length; i++) {
    //         seen.set(str1[i], (seen.get(str1[i]) || 0) + 1);
    //     }
    //     for (let i = 0; i < str2.length; i++) {
    //         if ((seen.get(str2[i]) || 0) == 0) return false;
    //         seen.set(str2[i], seen.get(str2[i]) - 1);
    //     }
    //     return true;
    // }
}
