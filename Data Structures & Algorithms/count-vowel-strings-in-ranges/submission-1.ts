class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words: string[], queries: number[][]): number[] {
        let isVowelCharacter = (char: string): boolean => {
            return char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u';
        }
        let prefixSum = new Array<number>(words.length + 1).fill(0);
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            prefixSum[i + 1] = prefixSum[i] + (isVowelCharacter(word[0]) && isVowelCharacter(word[word.length - 1]) ? 1 : 0);
        }
        let result = [];
        for (let query of queries) {
            let start = query[0];
            let end = query[1];
            result.push(prefixSum[end + 1] - prefixSum[start]);
        }
        return result;
    }
}
