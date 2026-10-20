class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const numStack: number[] = [];
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] == '+' || tokens[i] == '-' || tokens[i] == '*' || tokens[i] == '/') {
                const num1 = numStack.pop();
                const num2 = numStack.pop();
                switch (tokens[i]) {
                    case '+':
                        numStack.push(num2 + num1);
                        break;
                    case '-':
                        numStack.push(num2 - num1);
                        break;
                    case '*':
                        numStack.push(num2 * num1);
                        break;
                    case '/':
                        numStack.push(Math.trunc(num2 / num1));
                        break;
                }
            } else {
                numStack.push(parseInt(tokens[i]));
            }
        }
        return numStack.pop();
    }
}
