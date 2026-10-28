class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        const getPalindrome = (left: number, right: number): string => {
            while (left >= 0  && right < s.length && s[left] == s[right]) {
                left--;
                right++;
            }
            return s.substring(left + 1, right);
        }
        let longest = "";
        for (let i = 0; i < s.length; i++) {
            let p1 = getPalindrome(i, i);
            let p2 = getPalindrome(i, i + 1);
            longest = p1.length > longest.length ? p1 : longest;
            longest = p2.length > longest.length ? p2 : longest;
        }
        return longest;
    }
}
