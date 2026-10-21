class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s: string): number {
        let prefixZeros = new Array<number>(s.length + 1).fill(0);
        let prefixOnes = new Array<number>(s.length + 1).fill(0);
        let max = 0;

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            prefixZeros[i + 1] = prefixZeros[i] + (char == '0' ? 1 : 0);
            prefixOnes[i + 1] = prefixOnes[i] + (char == '1' ? 1 : 0);
        }

        for (let i = 1; i < s.length; i++) {
            let zeroes = prefixZeros[i];
            let ones = prefixOnes[s.length] - prefixOnes[i]; 
            max = Math.max(max, (zeroes + ones));
        }
        
        return max;
    }
}
