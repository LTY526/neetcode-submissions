class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let queue = [];
        for (let ch of s) {
            if (ch == '(' || ch == '{' || ch == '[') {
                queue.unshift(ch);
                continue;
            }
            if (queue.length == 0) return false;
            let recent = queue.shift();
            if (recent == '(' && ch != ')') return false;
            if (recent == '{' && ch != '}') return false;
            if (recent == '[' && ch != ']') return false;
        }
        return queue.length == 0;
    }
}
