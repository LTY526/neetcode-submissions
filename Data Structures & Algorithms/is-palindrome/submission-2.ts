class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const alphanumeric = /^[a-zA-Z0-9]$/;
        let left = 0
        let right = s.length - 1;

        while (left < right) {
            while (left < right && !alphanumeric.test(s[left])) {
                left++;
            }
            while (left < right && !alphanumeric.test(s[right])) {
                right--;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
